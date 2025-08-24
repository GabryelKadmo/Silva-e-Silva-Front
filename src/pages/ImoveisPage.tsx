
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngBounds } from 'leaflet'
import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { mockImoveis, RIBEIRAO_PRETO_CONFIG, BAIRROS_COORDENADAS } from '../data/mockImoveis'
import FiltroLateral from '../components/custom/FiltroLateral'

// Interface para filtros
interface Filtros {
    tipoImovel: string[]
    bairros: string[]
    precoMin: number | null
    precoMax: number | null
    quartos: number | null
    banheiros: number | null
    area: { min: number | null; max: number | null }
}

// Dados para os filtros
const TIPOS_IMOVEL = [
    { value: 'casa', label: 'Casa' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'sobrado', label: 'Sobrado' },
    { value: 'kitnet', label: 'Kitnet' }
]
const BAIRROS_DISPONIVEIS = Array.from(new Set(mockImoveis.map(imovel => imovel.bairro).filter(Boolean))).sort() as string[]
const FAIXAS_PRECO: { label: string; max?: number; min?: number }[] = [
    { label: 'Até R$ 400.000', max: 400000 },
    { label: 'R$ 400.000 - R$ 600.000', min: 400000, max: 600000 },
    { label: 'R$ 600.000 - R$ 800.000', min: 600000, max: 800000 },
    { label: 'R$ 800.000 - R$ 1.000.000', min: 800000, max: 1000000 },
    { label: 'Acima de R$ 1.000.000', min: 1000000 },
]

// Estilos customizados para o popup melhorado
const customStyles = `
  .custom-popup .leaflet-popup-content-wrapper {
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    overflow: hidden;
  }
  .custom-popup .leaflet-popup-content {
    margin: 0;
    padding: 0;
    min-width: 200px;
    max-width: 220px;
  }
  .custom-popup .leaflet-popup-tip {
    background: white;
  }
  .custom-popup .leaflet-popup-close-button {
    display: none !important;
  }
  .custom-popup a.leaflet-popup-close-button {
    display: none !important;
  }
`

// Configuração do mapa usando dados importados
const RIBEIRAO_PRETO_CENTER: LatLngTuple = RIBEIRAO_PRETO_CONFIG.center
const RIBEIRAO_PRETO_BOUNDS: LatLngBounds = new LatLngBounds(
    RIBEIRAO_PRETO_CONFIG.bounds[0], // Southwest
    RIBEIRAO_PRETO_CONFIG.bounds[1]  // Northeast
)

// Função para criar ícone com número de imóveis
const createNumberedIcon = (count: number) => {
    const html = `
        <div style="
            background-color: #5e0d12;
            color: white;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 12px;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">${count}</div>
    `

    return L.divIcon({
        html: html,
        className: 'custom-div-icon',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    })
}

export default function ImoveisPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [viewMode, setViewMode] = useState<'list' | 'hybrid'>('list')
    const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
    const mapRef = useRef<L.Map | null>(null)

    // Estado dos filtros avançados
    const [filtros, setFiltros] = useState<Filtros>({
        tipoImovel: [],
        bairros: [],
        precoMin: null,
        precoMax: null,
        quartos: null,
        banheiros: null,
        area: { min: null, max: null }
    })

    // Função para aplicar filtros
    const imoveisFiltrados = mockImoveis.filter(imovel => {
        // Filtro por termo de busca
        if (searchTerm && !imovel.endereco.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !imovel.bairro?.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false
        }

        // Filtro por tipo de imóvel
        if (filtros.tipoImovel.length > 0 && !filtros.tipoImovel.includes(imovel.tipo || '')) {
            return false
        }

        // Filtro por bairro
        if (filtros.bairros.length > 0 && !filtros.bairros.includes(imovel.bairro || '')) {
            return false
        }

        // Filtro por preço
        if (filtros.precoMin !== null && imovel.preco < filtros.precoMin) {
            return false
        }
        if (filtros.precoMax !== null && imovel.preco > filtros.precoMax) {
            return false
        }

        // Filtro por quartos
        if (filtros.quartos !== null && imovel.quartos !== filtros.quartos) {
            return false
        }

        // Filtro por banheiros
        if (filtros.banheiros !== null && imovel.banheiros !== filtros.banheiros) {
            return false
        }

        // Filtro por área
        if (filtros.area.min !== null && imovel.area < filtros.area.min) {
            return false
        }
        if (filtros.area.max !== null && imovel.area > filtros.area.max) {
            return false
        }

        return true
    })

    // Função para limpar filtros
    const limparFiltros = () => {
        setFiltros({
            tipoImovel: [],
            bairros: [],
            precoMin: null,
            precoMax: null,
            quartos: null,
            banheiros: null,
            area: { min: null, max: null }
        })
        setSearchTerm('')
    }

    // Função para aplicar faixa de preço predefinida
    const aplicarFaixaPreco = (faixa: { label: string; max?: number; min?: number }) => {
        setFiltros(prev => ({
            ...prev,
            precoMin: faixa.min || null,
            precoMax: faixa.max || null
        }))
    }

    // Agrupar imóveis filtrados por bairro para proteção de privacidade
    const imoveisPorBairro = imoveisFiltrados.reduce((acc, imovel) => {
        const bairro = imovel.bairro || 'Outros'
        if (!acc[bairro]) {
            acc[bairro] = []
        }
        acc[bairro].push(imovel)
        return acc
    }, {} as Record<string, typeof imoveisFiltrados>)

    // Inserir estilos customizados do popup
    useEffect(() => {
        const styleElement = document.createElement('style')
        styleElement.textContent = customStyles
        document.head.appendChild(styleElement)

        return () => {
            if (document.head.contains(styleElement)) {
                document.head.removeChild(styleElement)
            }
        }
    }, [])

    // Forçar modo lista no mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) { // lg breakpoint
                setViewMode('list')
            }
        }

        // Verificar no mount
        handleResize()

        // Adicionar listener para resize
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // const [filtros, setFiltros] = useState({
    //     tipoImovel: '',
    //     localizacao: '',
    //     precoMin: '',
    //     precoMax: '',
    //     quartos: '',
    //     banheiros: ''
    // })

    return (
        <div className="min-h-screen bg-[#fbf8f9]" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
            {/* Container principal */}
            <div className="px-2 sm:px-10 lg:px-40 py-3 sm:py-5">
                <div className="max-w-8xl mx-auto">

                    {/* Barra de controles - busca, filtros e modo de visualização */}
                    <div className="mb-4 space-y-3">
                        {/* Campo de busca e botões de visualização */}
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                            <div className="flex-1">
                                <label className="flex flex-col min-w-40 h-10 sm:h-12">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
                                        <div className="text-[#955055] flex border-none bg-white items-center justify-center pl-3 sm:pl-4 rounded-l-lg border-r-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-6 sm:h-6">
                                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            placeholder="Buscar por bairro ou endereço"
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0f] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#955055] px-2 sm:px-4 rounded-l-none border-l-0 pl-2 text-sm sm:text-base font-normal leading-normal"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </label>
                            </div>

                            {/* Botões de modo de visualização - apenas desktop */}
                            <div className="hidden lg:flex bg-white rounded-lg border border-gray-200 p-1">
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'list'
                                        ? 'bg-[#5e0d12] text-white'
                                        : 'text-[#955055] hover:bg-gray-100'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,48H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                                    </svg>
                                    Lista
                                </button>
                                <button
                                    onClick={() => setViewMode('hybrid')}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'hybrid'
                                        ? 'bg-[#5e0d12] text-white'
                                        : 'text-[#955055] hover:bg-gray-100'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,200H40V56h64Zm112,0H120V56h96Z"></path>
                                    </svg>
                                    Híbrido
                                </button>
                            </div>
                        </div>

                        {/* Filtros */}
                        <div className="flex gap-2 sm:gap-3 flex-wrap items-center">
                            {/* Filtro mobile - exibido apenas no mobile */}
                            <div className="lg:hidden">
                                <FiltroLateral
                                    filtros={filtros}
                                    setFiltros={setFiltros}
                                    limparFiltros={limparFiltros}
                                    resultadosCount={imoveisFiltrados.length}
                                    tiposImovel={TIPOS_IMOVEL}
                                    bairrosDisponiveis={BAIRROS_DISPONIVEIS}
                                    faixasPreco={FAIXAS_PRECO}
                                    aplicarFaixaPreco={aplicarFaixaPreco}
                                />
                            </div>

                            {/* Filtros rápidos */}
                            <button className="flex h-7 sm:h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-lg bg-[#f3e8e9] pl-2 sm:pl-4 pr-1 sm:pr-2 hover:bg-[#e8d5d7] transition-colors whitespace-nowrap">
                                <p className="text-[#1b0e0f] text-xs sm:text-sm font-medium leading-normal">Tipo</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </button>
                            <button className="flex h-7 sm:h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-lg bg-[#f3e8e9] pl-2 sm:pl-4 pr-1 sm:pr-2 hover:bg-[#e8d5d7] transition-colors whitespace-nowrap">
                                <p className="text-[#1b0e0f] text-xs sm:text-sm font-medium leading-normal">Local</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </button>
                            <button className="flex h-7 sm:h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-lg bg-[#f3e8e9] pl-2 sm:pl-4 pr-1 sm:pr-2 hover:bg-[#e8d5d7] transition-colors whitespace-nowrap">
                                <p className="text-[#1b0e0f] text-xs sm:text-sm font-medium leading-normal">Preço</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </button>
                            <button className="flex h-7 sm:h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-lg bg-[#f3e8e9] pl-2 sm:pl-4 pr-1 sm:pr-2 hover:bg-[#e8d5d7] transition-colors whitespace-nowrap">
                                <p className="text-[#1b0e0f] text-xs sm:text-sm font-medium leading-normal">Quartos</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </button>
                            <button className="flex h-7 sm:h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-lg bg-[#f3e8e9] pl-2 sm:pl-4 pr-1 sm:pr-2 hover:bg-[#e8d5d7] transition-colors whitespace-nowrap">
                                <p className="text-[#1b0e0f] text-xs sm:text-sm font-medium leading-normal">Banheiros</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-5 sm:h-5">
                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Conteúdo principal - baseado no modo de visualização */}
                    {viewMode === 'list' && (
                        /* Visualização apenas em lista com filtro lateral no desktop */
                        <div className="flex gap-6">
                            {/* Filtros laterais usando o novo componente - apenas desktop */}
                            <div className="hidden lg:block">
                                <FiltroLateral
                                    filtros={filtros}
                                    setFiltros={setFiltros}
                                    limparFiltros={limparFiltros}
                                    resultadosCount={imoveisFiltrados.length}
                                    tiposImovel={TIPOS_IMOVEL}
                                    bairrosDisponiveis={BAIRROS_DISPONIVEIS}
                                    faixasPreco={FAIXAS_PRECO}
                                    aplicarFaixaPreco={aplicarFaixaPreco}
                                />
                            </div>

                            {/* Lista de imóveis */}
                            <div className="flex-1">
                                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-6 px-1 lg:px-2 py-4">
                                    {imoveisFiltrados.map((imovel) => (
                                        <div
                                            key={imovel.id}
                                            className="flex flex-col cursor-pointer transition-shadow duration-150 ease-out rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                                            onMouseEnter={() => setHoveredProperty(imovel.id)}
                                            onMouseLeave={() => setHoveredProperty(null)}
                                        >
                                            <div
                                                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                                                style={{ backgroundImage: `url("${imovel.imagem}")` }}
                                            />
                                            <div className="p-2 lg:p-4">
                                                <p className="text-[#1b0e0f] text-sm lg:text-base font-semibold leading-tight mb-2 lg:mb-3 line-clamp-2">{imovel.endereco}</p>
                                                <div className="flex flex-wrap gap-1 lg:gap-2 mb-2 lg:mb-3">
                                                    <span className="text-[10px] lg:text-xs text-[#5e0d12] bg-[#f3e8e9] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium">
                                                        {imovel.quartos} quartos
                                                    </span>
                                                    <span className="text-[10px] lg:text-xs text-[#5e0d12] bg-[#f3e8e9] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium">
                                                        {imovel.banheiros} banheiros
                                                    </span>
                                                    <span className="text-[10px] lg:text-xs text-[#5e0d12] bg-[#f3e8e9] px-2 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium">
                                                        {imovel.area} m²
                                                    </span>
                                                </div>
                                                <p className="text-[#5e0d12] text-lg lg:text-xl font-bold">
                                                    R$ {imovel.preco.toLocaleString('pt-BR')}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mensagem quando não há resultados */}
                                {imoveisFiltrados.length === 0 && (
                                    <div className="text-center py-12">
                                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-gray-400">
                                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1b0e0f] mb-2">Nenhum imóvel encontrado</h3>
                                        <p className="text-[#955055] mb-4">Tente ajustar os filtros para encontrar mais opções</p>
                                        <button
                                            onClick={limparFiltros}
                                            className="px-6 py-2 bg-[#5e0d12] text-white rounded-lg font-medium hover:bg-[#7a1118] transition-colors"
                                        >
                                            Limpar filtros
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {viewMode === 'hybrid' && (
                        /* Visualização híbrida - mapa e lista lado a lado */
                        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-300px)] min-h-[500px]">
                            {/* Lista de imóveis */}
                            <div className="flex-1 overflow-y-auto px-3">
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4 py-2">
                                    {imoveisFiltrados.map((imovel) => (
                                        <div
                                            key={imovel.id}
                                            className={`flex flex-col gap-2 xl:gap-3 pb-2 xl:pb-3 cursor-pointer transition-shadow duration-150 ease-out rounded-xl overflow-hidden bg-white border ${hoveredProperty === imovel.id
                                                ? 'shadow-lg border-gray-200'
                                                : 'shadow-sm border-gray-100 hover:shadow-md'
                                                }`}
                                            onMouseEnter={() => setHoveredProperty(imovel.id)}
                                            onMouseLeave={() => setHoveredProperty(null)}
                                        >
                                            <div
                                                className="w-full bg-center bg-no-repeat h-32 xl:h-48 bg-cover"
                                                style={{ backgroundImage: `url("${imovel.imagem}")` }}
                                            />
                                            <div className="px-2 pb-1">
                                                <p className="text-[#1b0e0f] text-xs xl:text-sm font-semibold leading-tight mb-1 line-clamp-2">{imovel.endereco}</p>
                                                <div className="flex flex-wrap gap-1 mb-1">
                                                    <span className="text-[8px] xl:text-[10px] text-[#5e0d12] bg-[#f3e8e9] px-1 xl:px-1.5 py-0.5 rounded-full font-medium">
                                                        {imovel.quartos} Quartos
                                                    </span>
                                                    <span className="text-[8px] xl:text-[10px] text-[#5e0d12] bg-[#f3e8e9] px-1 xl:px-1.5 py-0.5 rounded-full font-medium">
                                                        {imovel.banheiros} Banheiros
                                                    </span>
                                                    <span className="text-[8px] xl:text-[10px] text-[#5e0d12] bg-[#f3e8e9] px-1 xl:px-1.5 py-0.5 rounded-full font-medium">
                                                        {imovel.area}m²
                                                    </span>
                                                </div>
                                                <p className="text-[#5e0d12] text-xs xl:text-sm font-bold">
                                                    R$ {imovel.preco.toLocaleString('pt-BR')}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mapa */}
                            <div className="w-full lg:w-2/5 rounded-lg overflow-hidden">
                                <MapContainer
                                    ref={mapRef}
                                    center={RIBEIRAO_PRETO_CENTER}
                                    zoom={RIBEIRAO_PRETO_CONFIG.zoom}
                                    minZoom={11}
                                    maxZoom={RIBEIRAO_PRETO_CONFIG.maxZoom}
                                    maxBounds={RIBEIRAO_PRETO_BOUNDS}
                                    maxBoundsViscosity={1.0}
                                    zoomControl={true}
                                    attributionControl={true}
                                    scrollWheelZoom={true}
                                    doubleClickZoom={true}
                                    dragging={true}
                                    className="w-full h-full rounded-lg z-0"
                                    style={{ zIndex: 0 }}
                                >
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                                        subdomains={['a', 'b', 'c', 'd']}
                                        maxZoom={RIBEIRAO_PRETO_CONFIG.maxZoom}
                                    />
                                    {Object.entries(imoveisPorBairro).map(([bairro, imoveis]) => {
                                        const coordenadas = BAIRROS_COORDENADAS[bairro] || RIBEIRAO_PRETO_CENTER
                                        const quantidadeImoveis = imoveis.length

                                        return (
                                            <Marker
                                                key={bairro}
                                                position={coordenadas}
                                                icon={createNumberedIcon(quantidadeImoveis)}
                                            >
                                                <Popup
                                                    maxWidth={220}
                                                    minWidth={200}
                                                    className="custom-popup"
                                                    closeButton={false}
                                                >
                                                    <div className="w-full overflow-hidden">
                                                        <img
                                                            src={imoveis[0].imagem}
                                                            alt={imoveis[0].endereco}
                                                            className="w-full h-20 object-cover"
                                                        />
                                                        <div className="p-2">
                                                            <p className="font-medium text-xs mb-0 leading-tight text-[#1b0e0f]">{imoveis[0].endereco}</p>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                                                                    {imoveis[0].quartos} Quartos
                                                                </span>
                                                                <span className="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                                                                    {imoveis[0].banheiros} Banheiros
                                                                </span>
                                                                <span className="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                                                                    {imoveis[0].area}m²
                                                                </span>
                                                            </div>
                                                            <p className="font-bold text-sm text-[#5e0d12] mb-2">
                                                                R$ {imoveis[0].preco.toLocaleString('pt-BR')}
                                                            </p>
                                                            {quantidadeImoveis > 1 && (
                                                                <div className="text-xs text-gray-500 text-center py-1.5 bg-gray-50 rounded mt-2">
                                                                    <span className="font-medium">+ {quantidadeImoveis - 1} {quantidadeImoveis - 1 === 1 ? 'imóvel' : 'imóveis'}</span> em {bairro}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Popup>
                                            </Marker>
                                        )
                                    })}
                                </MapContainer>
                            </div>
                        </div>
                    )}

                    {/* Paginação */}
                    <div className="flex items-center justify-center p-3 sm:p-4 gap-1 sm:gap-2">
                        <button className="flex size-8 sm:size-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-[18px] sm:h-[18px]">
                                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                            </svg>
                        </button>
                        <button className="text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] flex size-8 sm:size-10 items-center justify-center text-[#1b0e0f] rounded-full bg-[#f3e8e9]">1</button>
                        <button className="text-xs sm:text-sm font-normal leading-normal flex size-8 sm:size-10 items-center justify-center text-[#1b0e0f] rounded-full hover:bg-gray-100 transition-colors">2</button>
                        <button className="text-xs sm:text-sm font-normal leading-normal flex size-8 sm:size-10 items-center justify-center text-[#1b0e0f] rounded-full hover:bg-gray-100 transition-colors">3</button>
                        <button className="hidden sm:flex text-sm font-normal leading-normal size-10 items-center justify-center text-[#1b0e0f] rounded-full hover:bg-gray-100 transition-colors">4</button>
                        <button className="hidden sm:flex text-sm font-normal leading-normal size-10 items-center justify-center text-[#1b0e0f] rounded-full hover:bg-gray-100 transition-colors">5</button>
                        <button className="flex size-8 sm:size-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="sm:w-[18px] sm:h-[18px]">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

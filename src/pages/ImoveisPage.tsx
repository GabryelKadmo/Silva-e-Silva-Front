
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngBounds } from 'leaflet'
import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { mockImoveis, RIBEIRAO_PRETO_CONFIG, BAIRROS_COORDENADAS } from '../data/mockImoveis'

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
    const mapRef = useRef<L.Map | null>(null)

    // Agrupar imóveis por bairro para proteção de privacidade
    const imoveisPorBairro = mockImoveis.reduce((acc, imovel) => {
        const bairro = imovel.bairro || 'Outros'
        if (!acc[bairro]) {
            acc[bairro] = []
        }
        acc[bairro].push(imovel)
        return acc
    }, {} as Record<string, typeof mockImoveis>)

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
            <div className="px-4 sm:px-10 lg:px-40 py-3 sm:py-5">
                <div className="max-w-7xl mx-auto">

                    {/* Campo de busca fora do mapa */}
                    <div className="mb-3">
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

                    {/* Seção do Mapa */}
                    <div className="flex flex-col h-full flex-1">
                        <div className="flex flex-1 flex-col py-2 sm:py-3">
                            <div className="relative min-h-[300px] sm:min-h-[400px] flex-1 flex flex-col justify-between px-0 pb-3 sm:pb-4 pt-3 sm:pt-5 rounded-lg overflow-hidden">

                                {/* Mapa do Leaflet */}
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
                                    className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-lg z-0"
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
                    </div>

                    {/* Filtros */}
                    <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 flex-wrap pr-2 sm:pr-4 overflow-x-auto">
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

                    {/* Grid de Imóveis */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 sm:gap-4 p-3 sm:p-4">
                        {mockImoveis.map((imovel) => (
                            <div key={imovel.id} className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-3 cursor-pointer hover:shadow-lg transition-shadow rounded-lg p-2 bg-white">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                    style={{ backgroundImage: `url("${imovel.imagem}")` }}
                                />
                                <div className="px-1">
                                    <p className="text-[#1b0e0f] text-sm sm:text-base font-medium leading-tight mb-1">{imovel.endereco}</p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        <span className="text-xs text-[#955055] bg-gray-100 px-2 py-1 rounded">
                                            {imovel.quartos} quartos
                                        </span>
                                        <span className="text-xs text-[#955055] bg-gray-100 px-2 py-1 rounded">
                                            {imovel.banheiros} banheiros
                                        </span>
                                        <span className="text-xs text-[#955055] bg-gray-100 px-2 py-1 rounded">
                                            {imovel.area} m²
                                        </span>
                                    </div>
                                    <p className="text-[#5e0d12] text-lg sm:text-xl font-bold">
                                        R$ {imovel.preco.toLocaleString('pt-BR')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

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

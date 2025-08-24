import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Filter, X, Settings2 } from 'lucide-react'

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

interface FiltroLateralProps {
    filtros: Filtros
    setFiltros: React.Dispatch<React.SetStateAction<Filtros>>
    limparFiltros: () => void
    resultadosCount: number
    tiposImovel: { value: string; label: string }[]
    bairrosDisponiveis: string[]
    faixasPreco: { label: string; max?: number; min?: number }[]
    aplicarFaixaPreco: (faixa: { label: string; max?: number; min?: number }) => void
}

export default function FiltroLateral({
    filtros,
    setFiltros,
    limparFiltros,
    resultadosCount,
    tiposImovel,
    bairrosDisponiveis,
    faixasPreco,
    aplicarFaixaPreco
}: FiltroLateralProps) {

    // Função para atualizar filtro de tipo de imóvel
    const toggleTipoImovel = (tipo: string) => {
        setFiltros(prev => ({
            ...prev,
            tipoImovel: prev.tipoImovel.includes(tipo)
                ? prev.tipoImovel.filter(t => t !== tipo)
                : [...prev.tipoImovel, tipo]
        }))
    }

    // Função para atualizar filtro de bairros
    const toggleBairro = (bairro: string) => {
        setFiltros(prev => ({
            ...prev,
            bairros: prev.bairros.includes(bairro)
                ? prev.bairros.filter(b => b !== bairro)
                : [...prev.bairros, bairro]
        }))
    }

    // Função para selecionar número de quartos/banheiros
    const selectNumber = (type: 'quartos' | 'banheiros', num: number) => {
        setFiltros(prev => ({
            ...prev,
            [type]: prev[type] === num ? null : num
        }))
    }

    // Contar filtros ativos
    const getFiltrosAtivos = () => {
        let count = 0
        if (filtros.tipoImovel.length > 0) count++
        if (filtros.bairros.length > 0) count++
        if (filtros.precoMin !== null || filtros.precoMax !== null) count++
        if (filtros.quartos !== null) count++
        if (filtros.banheiros !== null) count++
        if (filtros.area.min !== null || filtros.area.max !== null) count++
        return count
    }

    const ConteudoFiltro = () => (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#1b0e0f]">Filtros</h3>
                    {getFiltrosAtivos() > 0 && (
                        <Badge variant="secondary" className="bg-[#5e0d12] text-white">
                            {getFiltrosAtivos()}
                        </Badge>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={limparFiltros}
                    className="text-[#5e0d12] hover:text-[#7a1118] hover:bg-[#f3e8e9]"
                >
                    <X className="w-4 h-4 mr-1" />
                    Limpar
                </Button>
            </div>

            {/* Accordion para organizar filtros */}
            <Accordion type="multiple" defaultValue={["tipo", "localizacao", "preco", "quartos", "area"]} className="w-full">
                {/* Tipo de Imóvel */}
                <AccordionItem value="tipo">
                    <AccordionTrigger className="text-sm font-medium text-[#1b0e0f] hover:text-[#5e0d12]">
                        Tipo de Imóvel
                        {filtros.tipoImovel.length > 0 && (
                            <Badge variant="outline" className="ml-2">
                                {filtros.tipoImovel.length}
                            </Badge>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            {tiposImovel.map(tipo => (
                                <div key={tipo.value} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={tipo.value}
                                        checked={filtros.tipoImovel.includes(tipo.value)}
                                        onCheckedChange={() => toggleTipoImovel(tipo.value)}
                                        className="data-[state=checked]:bg-[#5e0d12] data-[state=checked]:border-[#5e0d12]"
                                    />
                                    <Label htmlFor={tipo.value} className="text-sm text-[#1b0e0f] cursor-pointer">
                                        {tipo.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Localização */}
                <AccordionItem value="localizacao">
                    <AccordionTrigger className="text-sm font-medium text-[#1b0e0f] hover:text-[#5e0d12]">
                        Bairros
                        {filtros.bairros.length > 0 && (
                            <Badge variant="outline" className="ml-2">
                                {filtros.bairros.length}
                            </Badge>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2 max-h-48 overflow-y-auto">
                            {bairrosDisponiveis.map(bairro => (
                                <div key={bairro} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={bairro}
                                        checked={filtros.bairros.includes(bairro)}
                                        onCheckedChange={() => toggleBairro(bairro)}
                                        className="data-[state=checked]:bg-[#5e0d12] data-[state=checked]:border-[#5e0d12]"
                                    />
                                    <Label htmlFor={bairro} className="text-sm text-[#1b0e0f] cursor-pointer">
                                        {bairro}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Preço */}
                <AccordionItem value="preco">
                    <AccordionTrigger className="text-sm font-medium text-[#1b0e0f] hover:text-[#5e0d12]">
                        Faixa de Preço
                        {(filtros.precoMin !== null || filtros.precoMax !== null) && (
                            <Badge variant="outline" className="ml-2">
                                Ativo
                            </Badge>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2">
                            {/* Faixas predefinidas */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-[#1b0e0f]">Faixas rápidas:</Label>
                                <div className="grid grid-cols-1 gap-2">
                                    {faixasPreco.map((faixa, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => aplicarFaixaPreco(faixa)}
                                            className={`justify-start h-auto py-2 px-3 text-left ${(filtros.precoMin === (faixa.min || null) && filtros.precoMax === (faixa.max || null))
                                                ? 'bg-[#5e0d12] text-white border-[#5e0d12] hover:bg-[#7a1118] hover:text-white'
                                                : 'hover:bg-[#f3e8e9] hover:border-[#5e0d12]'
                                                }`}
                                        >
                                            {faixa.label}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Valores personalizados */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-[#1b0e0f]">Valores personalizados:</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Label htmlFor="precoMin" className="text-xs text-[#1b0e0f]">Mínimo</Label>
                                        <Input
                                            id="precoMin"
                                            type="number"
                                            placeholder="R$ 0"
                                            value={filtros.precoMin || ''}
                                            onChange={(e) => {
                                                const value = e.target.value ? Number(e.target.value) : null
                                                setFiltros(prev => ({
                                                    ...prev,
                                                    precoMin: value
                                                }))
                                            }}
                                            className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="precoMax" className="text-xs text-[#1b0e0f]">Máximo</Label>
                                        <Input
                                            id="precoMax"
                                            type="number"
                                            placeholder="R$ ∞"
                                            value={filtros.precoMax || ''}
                                            onChange={(e) => {
                                                const value = e.target.value ? Number(e.target.value) : null
                                                setFiltros(prev => ({
                                                    ...prev,
                                                    precoMax: value
                                                }))
                                            }}
                                            className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Quartos e Banheiros */}
                <AccordionItem value="quartos">
                    <AccordionTrigger className="text-sm font-medium text-[#1b0e0f] hover:text-[#5e0d12]">
                        Quartos & Banheiros
                        {(filtros.quartos !== null || filtros.banheiros !== null) && (
                            <Badge variant="outline" className="ml-2">
                                Ativo
                            </Badge>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2">
                            {/* Quartos */}
                            <div>
                                <Label className="text-sm font-medium text-[#1b0e0f] mb-2 block">Quartos</Label>
                                <div className="flex gap-2 flex-wrap">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <Button
                                            key={num}
                                            variant={filtros.quartos === num ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => selectNumber('quartos', num)}
                                            className={`w-10 h-10 p-0 ${filtros.quartos === num
                                                ? 'bg-[#5e0d12] hover:bg-[#7a1118] text-white'
                                                : 'hover:bg-[#f3e8e9] hover:border-[#5e0d12]'
                                                }`}
                                        >
                                            {num}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Banheiros */}
                            <div>
                                <Label className="text-sm font-medium text-[#1b0e0f] mb-2 block">Banheiros</Label>
                                <div className="flex gap-2 flex-wrap">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <Button
                                            key={num}
                                            variant={filtros.banheiros === num ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => selectNumber('banheiros', num)}
                                            className={`w-10 h-10 p-0 ${filtros.banheiros === num
                                                ? 'bg-[#5e0d12] hover:bg-[#7a1118] text-white'
                                                : 'hover:bg-[#f3e8e9] hover:border-[#5e0d12]'
                                                }`}
                                        >
                                            {num}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Área */}
                <AccordionItem value="area">
                    <AccordionTrigger className="text-sm font-medium text-[#1b0e0f] hover:text-[#5e0d12]">
                        Área (m²)
                        {(filtros.area.min !== null || filtros.area.max !== null) && (
                            <Badge variant="outline" className="ml-2">
                                Ativo
                            </Badge>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-2">
                            {/* Inputs manuais */}
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <Label htmlFor="areaMin" className="text-xs text-[#1b0e0f]">Mínimo</Label>
                                    <Input
                                        id="areaMin"
                                        type="number"
                                        placeholder="0"
                                        value={filtros.area.min || ''}
                                        onChange={(e) => {
                                            const value = e.target.value ? Number(e.target.value) : null
                                            setFiltros(prev => ({
                                                ...prev,
                                                area: {
                                                    ...prev.area,
                                                    min: value
                                                }
                                            }))
                                        }}
                                        className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="areaMax" className="text-xs text-[#1b0e0f]">Máximo</Label>
                                    <Input
                                        id="areaMax"
                                        type="number"
                                        placeholder="500"
                                        value={filtros.area.max || ''}
                                        onChange={(e) => {
                                            const value = e.target.value ? Number(e.target.value) : null
                                            setFiltros(prev => ({
                                                ...prev,
                                                area: {
                                                    ...prev.area,
                                                    max: value
                                                }
                                            }))
                                        }}
                                        className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* Contador de resultados */}
            <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-[#1b0e0f]">
                        <span className="font-semibold text-[#5e0d12]">{resultadosCount}</span>{' '}
                        {resultadosCount === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* Desktop - Sidebar fixa */}
            <div className="hidden lg:block w-80 bg-white rounded-lg border border-gray-200 p-6 h-fit sticky top-4 shadow-sm">
                <ConteudoFiltro />
            </div>

            {/* Mobile - Sheet lateral */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 bg-white border-gray-200 hover:bg-[#f3e8e9] hover:border-[#5e0d12]"
                        >
                            <Filter className="w-4 h-4" />
                            Filtros
                            {getFiltrosAtivos() > 0 && (
                                <Badge className="bg-[#5e0d12] text-white ml-1">
                                    {getFiltrosAtivos()}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:w-96 p-0">
                        <SheetHeader className="p-6 pb-4 border-b">
                            <SheetTitle className="flex items-center gap-2">
                                <Settings2 className="w-5 h-5 text-[#5e0d12]" />
                                Filtros Avançados
                            </SheetTitle>
                            <SheetDescription>
                                Refine sua busca para encontrar o imóvel ideal
                            </SheetDescription>
                        </SheetHeader>
                        <div className="p-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                            <ConteudoFiltro />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

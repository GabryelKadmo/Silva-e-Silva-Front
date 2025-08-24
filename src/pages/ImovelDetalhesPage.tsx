import { Bath, Bed, Car, Home, Star, X, Images, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { mockImoveis } from "../data/mockImoveis";
import LogoPng from "/LogoWhitePng.png";

export default function ImovelDetalhesPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [imagemPrincipalIndex, setImagemPrincipalIndex] = useState(0);
    const [galeriaAberta, setGaleriaAberta] = useState(false);

    const imovel = mockImoveis.find((item) => item.id === Number(id));

    // Mock de imagens adicionais (incluindo a principal repetida)
    const mockImages = imovel ? [
        imovel.imagem, // Imagem principal
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Sala",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Quarto",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Cozinha",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Banheiro",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Varanda",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Area+Externa",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Garagem",
    ] : [];

    // Desabilita o scroll do body quando a galeria estiver aberta
    useEffect(() => {
        if (galeriaAberta) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup para garantir que o scroll seja restaurado
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [galeriaAberta]);

    // Função para navegar com teclado
    useEffect(() => {
        if (!galeriaAberta) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setGaleriaAberta(false);
            } else if (e.key === 'ArrowLeft') {
                setImagemPrincipalIndex(
                    imagemPrincipalIndex === 0 ? mockImages.length - 1 : imagemPrincipalIndex - 1
                );
            } else if (e.key === 'ArrowRight') {
                setImagemPrincipalIndex(
                    imagemPrincipalIndex === mockImages.length - 1 ? 0 : imagemPrincipalIndex + 1
                );
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [galeriaAberta, imagemPrincipalIndex, mockImages.length]);

    // Função para fechar ao clicar fora
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setGaleriaAberta(false);
        }
    };

    if (!imovel) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Imóvel não encontrado
                    </h1>
                    <p className="text-gray-600 mb-8">
                        O imóvel que você está procurando não foi encontrado.
                    </p>
                    <Button onClick={() => navigate("/imoveis")}>
                        Voltar para Imóveis
                    </Button>
                </div>
            </div>
        );
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    return (
        <>
            {/* Modal da Galeria Completa - Versão Mobile Otimizada */}
            {galeriaAberta && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
                    onClick={handleBackdropClick}
                >
                    {/* Container principal do modal */}
                    <div className="relative w-full h-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 flex flex-col">

                        {/* Header elegante do modal - Centralizado */}
                        <div className="flex justify-between items-center px-2 sm:px-4 md:px-6 py-4"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="flex-1" onClick={() => setGaleriaAberta(false)}></div>

                            <div className="flex flex-col items-center text-white">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">Galeria de Fotos</h3>
                                <p className="text-xs sm:text-sm text-white/70 font-medium">
                                    {imagemPrincipalIndex + 1} de {mockImages.length}
                                </p>
                            </div>

                            <div className="flex items-center space-x-2 flex-1 justify-end">
                                <div className="hidden md:flex items-center space-x-2 text-white/60 text-xs font-medium">
                                    <span>ESC para fechar</span>
                                    <span>•</span>
                                    <span>← → para navegar</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 transition-all duration-200"
                                    onClick={() => setGaleriaAberta(false)}
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Área da imagem principal - Centralizada */}
                        <div className="flex-1 flex items-center justify-center px-4 py-4"
                            onClick={(e) => e.stopPropagation()}>
                            {/* Mobile - Aspect ratio mais quadrado */}
                            <div className="relative w-full max-w-2xl sm:hidden">
                                <div className="relative w-full aspect-[4/3] max-h-[50vh] flex items-center justify-center">
                                    <img
                                        src={mockImages[imagemPrincipalIndex]}
                                        alt={`Imagem ${imagemPrincipalIndex + 1} do imóvel`}
                                        className="w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-300"
                                        style={{
                                            imageRendering: '-webkit-optimize-contrast',
                                            filter: 'contrast(1.05) saturate(1.1)',
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {/* Indicador de loading/transição sutil */}
                                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none" />
                                </div>

                                {/* Área clicável para fechar - Mobile */}
                                <div className="absolute inset-0 -m-4" onClick={() => setGaleriaAberta(false)}></div>
                            </div>

                            {/* Desktop/Tablet - Formato original */}
                            <div className="relative w-full max-w-4xl max-h-[60vh] hidden sm:flex items-center justify-center">
                                <img
                                    src={mockImages[imagemPrincipalIndex]}
                                    alt={`Imagem ${imagemPrincipalIndex + 1} do imóvel`}
                                    className="w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-300"
                                    style={{
                                        imageRendering: '-webkit-optimize-contrast',
                                        filter: 'contrast(1.05) saturate(1.1)',
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                {/* Indicador de loading/transição sutil */}
                                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none" />

                                {/* Área clicável para fechar - Desktop */}
                                <div className="absolute inset-0 -m-8" onClick={() => setGaleriaAberta(false)}></div>
                            </div>
                        </div>

                        {/* Navegação por setas - Adaptada para o novo layout */}
                        {mockImages.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200 backdrop-blur-sm bg-black/30 border border-white/20 z-30"
                                    onClick={() => setImagemPrincipalIndex(
                                        imagemPrincipalIndex === 0 ? mockImages.length - 1 : imagemPrincipalIndex - 1
                                    )}
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200 backdrop-blur-sm bg-black/30 border border-white/20 z-30"
                                    onClick={() => setImagemPrincipalIndex(
                                        imagemPrincipalIndex === mockImages.length - 1 ? 0 : imagemPrincipalIndex + 1
                                    )}
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </Button>
                            </>
                        )}

                        {/* Barra de thumbnails - Posicionada na parte inferior */}
                        <div className="px-4 pb-4" onClick={(e) => e.stopPropagation()}>
                            {/* Mobile - Carrossel horizontal com thumbnails maiores */}
                            <div className="sm:hidden">
                                <div className="flex justify-start items-center gap-3 overflow-x-auto pb-2 pt-2 px-2"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    {mockImages.map((image, index) => (
                                        <button
                                            key={index}
                                            className={`flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden backdrop-blur-sm ${imagemPrincipalIndex === index
                                                ? 'ring-2 ring-white/90 ring-offset-1 ring-offset-transparent scale-105 opacity-100 shadow-lg shadow-white/30'
                                                : 'opacity-75 hover:opacity-95 hover:scale-105'
                                                } relative group`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setImagemPrincipalIndex(index);
                                            }}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-18 h-14 object-cover transition-all duration-300 group-hover:brightness-110"
                                            />
                                            {/* Overlay para melhor contraste */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 transition-opacity duration-300 ${imagemPrincipalIndex === index ? 'opacity-0' : 'opacity-30 group-hover:opacity-15'
                                                }`}></div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop/Tablet - Grid centralizado com thumbnails maiores */}
                            <div className="hidden sm:flex justify-center items-center gap-4 flex-wrap">
                                {/* Mostra todas as thumbnails organizadas em linhas */}
                                {mockImages.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`flex-shrink-0 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-sm ${imagemPrincipalIndex === index
                                            ? 'ring-2 ring-white/80 ring-offset-2 ring-offset-transparent scale-110 opacity-100 shadow-lg shadow-white/20'
                                            : 'opacity-60 hover:opacity-90 hover:scale-105 hover:ring-1 hover:ring-white/40'
                                            } relative group`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setImagemPrincipalIndex(index);
                                        }}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-20 h-16 md:w-24 md:h-18 object-cover transition-all duration-300 group-hover:brightness-110"
                                        />
                                        {/* Overlay gradient sutil */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 transition-opacity duration-300 ${imagemPrincipalIndex === index ? 'opacity-0' : 'opacity-30 group-hover:opacity-10'
                                            }`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
                {/* Header com botão voltar */}
                <div className="mb-6">
                    {/* Layout Desktop - Informações em linha */}
                    <div className="hidden sm:flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {imovel.endereco}
                            </h1>
                            <div className="flex items-center text-gray-600">
                                <span> {formatPrice(imovel.preco)}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="outline">
                                <Star className="w-4 h-4 mr-2" />
                                Favoritar
                            </Button>
                            <Button className="bg-[#5e0d12] hover:bg-[#7a1a1f]">
                                Agendar Visita
                            </Button>
                        </div>
                    </div>

                    {/* Layout Mobile - Informações empilhadas */}
                    <div className="sm:hidden">
                        <div className="mb-4 w">
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                {imovel.endereco}
                            </h1>
                            <div className="flex items-center text-gray-600 mb-4">
                                <span className="text-2xl font-bold text-[#5e0d12]"> {formatPrice(imovel.preco)}</span>
                            </div>
                        </div>

                        {/* Botões de ação mobile */}
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Star className="w-4 h-4 mr-2" />
                                Favoritar
                            </Button>
                            <Button className="bg-[#5e0d12] hover:bg-[#7a1a1f] flex-1" size="sm">
                                Agendar Visita
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Galeria de Imagens */}
                    <div className="lg:col-span-2">
                        {/* Layout Desktop - Grid com imagem principal e miniaturas */}
                        <div className="hidden md:flex gap-4 mb-8">
                            {/* Imagem Principal - Esquerda */}
                            <div className="flex-1 group">
                                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                    <img
                                        src={mockImages[imagemPrincipalIndex]}
                                        alt="Imagem principal do imóvel"
                                        className="w-full h-96 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                                        loading="eager"
                                        decoding="async"
                                        style={{
                                            imageRendering: '-webkit-optimize-contrast',
                                            filter: 'contrast(1.05) saturate(1.1)',
                                        }}
                                        onClick={() => setGaleriaAberta(true)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Badge className="bg-white/90 text-black hover:bg-white">
                                            Imagem {imagemPrincipalIndex + 1} de {mockImages.length}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Grid de Imagens Menores - Direita */}
                            <div className="w-1/2">
                                <div className="grid grid-cols-2 gap-3 h-96">
                                    {mockImages.slice(1, 5).map((image, index) => (
                                        <div
                                            key={index + 1}
                                            className="relative group overflow-hidden rounded-lg"
                                        >
                                            <img
                                                src={image}
                                                alt={`Imagem ${index + 2} do imóvel`}
                                                className={`w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-110 ${imagemPrincipalIndex === index + 1
                                                    ? 'ring-3 ring-[#5e0d12] ring-offset-2 opacity-100 scale-105'
                                                    : 'hover:opacity-90'
                                                    }`}
                                                style={{
                                                    imageRendering: '-webkit-optimize-contrast',
                                                    filter: 'contrast(1.02) saturate(1.05)',
                                                }}
                                                onClick={() => setImagemPrincipalIndex(index + 1)}
                                            />

                                            {/* Overlay elegante para a última imagem */}
                                            {index === 3 && mockImages.length > 5 && (
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300 hover:from-black/80 hover:via-black/60 hover:to-black/80 group"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setGaleriaAberta(true);
                                                    }}
                                                >
                                                    <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                                                        <div className="mb-3">
                                                            <Images className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
                                                        </div>
                                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-black font-medium text-sm shadow-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
                                                            <span className="font-semibold">+{mockImages.length - 4}</span>
                                                            <span className="text-gray-600 ml-1">fotos</span>
                                                        </div>
                                                        <p className="text-white/80 text-xs mt-2 font-medium">Ver galeria completa</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Layout Mobile - Imagem principal e carrossel */}
                        <div className="md:hidden mb-6 px-1">
                            {/* Imagem Principal Mobile */}
                            <div className="relative mb-4">
                                <div className="relative overflow-hidden rounded-lg mx-2">
                                    <img
                                        src={mockImages[imagemPrincipalIndex]}
                                        alt="Imagem principal do imóvel"
                                        className="w-full h-64 sm:h-72 object-cover cursor-pointer"
                                        loading="eager"
                                        decoding="async"
                                        style={{
                                            imageRendering: '-webkit-optimize-contrast',
                                            filter: 'contrast(1.05) saturate(1.1)',
                                        }}
                                        onClick={() => setGaleriaAberta(true)}
                                    />

                                    {/* Overlay com informações */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                                    {/* Badge de posição da imagem */}
                                    <div className="absolute top-3 right-3">
                                        <Badge className="bg-black/70 text-white hover:bg-black/80 text-xs">
                                            {imagemPrincipalIndex + 1}/{mockImages.length}
                                        </Badge>
                                    </div>

                                    {/* Botão de galeria completa */}
                                    <div className="absolute bottom-3 right-3">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="bg-white/90 text-black hover:bg-white text-xs h-8 px-3"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setGaleriaAberta(true);
                                            }}
                                        >
                                            <Images className="w-3 h-3 mr-1" />
                                            Ver todas
                                        </Button>
                                    </div>

                                    {/* Setas de navegação para mobile */}
                                    {mockImages.length > 1 && (
                                        <>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-10 h-10 bg-black/30 backdrop-blur-sm"
                                                onClick={() => setImagemPrincipalIndex(
                                                    imagemPrincipalIndex === 0 ? mockImages.length - 1 : imagemPrincipalIndex - 1
                                                )}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-10 h-10 bg-black/30 backdrop-blur-sm"
                                                onClick={() => setImagemPrincipalIndex(
                                                    imagemPrincipalIndex === mockImages.length - 1 ? 0 : imagemPrincipalIndex + 1
                                                )}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Carrossel de Thumbnails Mobile */}
                            <div
                                className="overflow-x-auto [&::-webkit-scrollbar]:hidden px-2"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                <div className="flex gap-3 pb-2 px-1 my-2" style={{ width: 'max-content' }}>
                                    {mockImages.map((image, index) => (
                                        <button
                                            key={index}
                                            className={`flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden ${imagemPrincipalIndex === index
                                                ? 'ring-2 ring-[#5e0d12] ring-offset-1 scale-105 opacity-100'
                                                : 'opacity-70 hover:opacity-90 hover:scale-105'
                                                }`}
                                            onClick={() => setImagemPrincipalIndex(index)}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="bg-white rounded-lg border p-4 sm:p-6">
                            <h2 className="text-xl font-semibold mb-4">Sobre este imóvel</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {imovel.descricao}
                            </p>

                            <Separator className="my-6" />

                            <h3 className="text-lg font-semibold mb-4">Características do Imóvel</h3>

                            {/* Desktop - 4 colunas */}
                            <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex items-center">
                                    <Bed className="w-5 h-5 text-gray-500 mr-2" />
                                    <div>
                                        <p className="font-medium">{imovel.quartos} <span className="text-sm text-gray-500">Quartos</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Bath className="w-5 h-5 text-gray-500 mr-2" />
                                    <div>
                                        <p className="font-medium">{imovel.banheiros} <span className="text-sm text-gray-500">Banheiros</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Home className="w-5 h-5 text-gray-500 mr-2" />
                                    <div>
                                        <p className="font-medium">{imovel.area} <span className="text-sm text-gray-500">m²</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Car className="w-5 h-5 text-gray-500 mr-2" />
                                    <div>
                                        <p className="font-medium">2 <span className="text-sm text-gray-500">Vagas</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile - 2 colunas com layout mais espaçado */}
                            <div className="sm:hidden grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Bed className="w-6 h-6 text-[#5e0d12] mb-2" />
                                    <p className="font-semibold text-lg">{imovel.quartos}</p>
                                    <p className="text-xs text-gray-500 text-center">Quartos</p>
                                </div>

                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Bath className="w-6 h-6 text-[#5e0d12] mb-2" />
                                    <p className="font-semibold text-lg">{imovel.banheiros}</p>
                                    <p className="text-xs text-gray-500 text-center">Banheiros</p>
                                </div>

                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Home className="w-6 h-6 text-[#5e0d12] mb-2" />
                                    <p className="font-semibold text-lg">{imovel.area}</p>
                                    <p className="text-xs text-gray-500 text-center">m²</p>
                                </div>

                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Car className="w-6 h-6 text-[#5e0d12] mb-2" />
                                    <p className="font-semibold text-lg">2</p>
                                    <p className="text-xs text-gray-500 text-center">Vagas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar com informações de contato */}
                    <div className="lg:col-span-1">
                        {/* Desktop - Sidebar fixa */}
                        <div className="hidden lg:block sticky top-8 space-y-6">
                            <div className="bg-white rounded-lg border p-6">
                                <h3 className="text-lg font-semibold mb-4">Contato</h3>

                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <img src={LogoPng} alt="Logo" className="bg-[#5a1317] rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Silva & Silva</p>
                                            <p className="text-sm text-gray-500">Corretor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full bg-[#5a1317] hover:bg-[#7a1a1f]" size="lg">
                                        Enviar Proposta
                                    </Button>

                                    <Button variant="outline" className="w-full" size="lg">
                                        Agendar Visita
                                    </Button>
                                </div>

                                <Separator className="my-6" />

                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">Código do imóvel</p>
                                    <p className="font-mono text-lg font-bold">{imovel.id.toString().padStart(6, '0')}</p>
                                </div>
                            </div>

                            {/* Informações adicionais */}
                            <div className="bg-white rounded-lg border p-6">
                                <h3 className="text-lg font-semibold mb-4">Informações Adicionais</h3>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">IPTU:</span>
                                        <span className="font-medium">R$ 850/ano</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Condomínio:</span>
                                        <span className="font-medium">R$ 280/mês</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Tipo:</span>
                                        <span className="font-medium capitalize">{imovel.tipo}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Bairro:</span>
                                        <span className="font-medium">{imovel.bairro}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile/Tablet - Cards empilhados */}
                        <div className="lg:hidden space-y-4">
                            {/* Card de informações adicionais mobile */}
                            <div className="bg-white rounded-lg border p-4 sm:p-6">
                                <h3 className="text-lg font-semibold mb-4">Informações</h3>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-xs mb-1">IPTU</span>
                                        <span className="font-medium">R$ 850/ano</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-xs mb-1">Condomínio</span>
                                        <span className="font-medium">R$ 280/mês</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-xs mb-1">Tipo</span>
                                        <span className="font-medium capitalize">{imovel.tipo}</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-gray-500 text-xs mb-1">Bairro</span>
                                        <span className="font-medium">{imovel.bairro}</span>
                                    </div>

                                    <div className="flex flex-col col-span-2">
                                        <span className="text-gray-500 text-xs mb-1">Código do imóvel</span>
                                        <span className="font-mono text-sm font-bold">{imovel.id.toString().padStart(6, '0')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card de contato mobile */}
                            <div className="bg-white rounded-lg border p-4 sm:p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                        <img src={LogoPng} alt="Logo" className="w-8 h-8 bg-[#5a1317] rounded-full" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Silva & Silva</p>
                                        <p className="text-sm text-gray-500">Corretor especializado</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Button className="bg-[#5a1317] hover:bg-[#7a1a1f]" size="sm">
                                        Enviar Proposta
                                    </Button>

                                    <Button variant="outline" size="sm">
                                        Agendar Visita
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Imóveis relacionados */}
                <div className="mt-12">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">Imóveis Similares</h2>

                    {/* Grid responsivo para imóveis similares */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {mockImoveis
                            .filter((item) => {
                                // Primeiro, filtra pelo mesmo bairro e exclui o imóvel atual
                                if (item.id === imovel.id) return false;

                                // Prioriza imóveis do mesmo bairro
                                if (item.bairro === imovel.bairro) return true;

                                // Se não houver suficientes no mesmo bairro, inclui do mesmo tipo
                                if (item.tipo === imovel.tipo) return true;

                                // Inclui imóveis com preços similares (+-30%)
                                const diferencaPreco = Math.abs(item.preco - imovel.preco) / imovel.preco;
                                if (diferencaPreco <= 0.3) return true;

                                return false;
                            })
                            .sort((a, b) => {
                                // Ordena por relevância: mesmo bairro primeiro, depois mesmo tipo, depois preço similar
                                if (a.bairro === imovel.bairro && b.bairro !== imovel.bairro) return -1;
                                if (a.bairro !== imovel.bairro && b.bairro === imovel.bairro) return 1;

                                if (a.tipo === imovel.tipo && b.tipo !== imovel.tipo) return -1;
                                if (a.tipo !== imovel.tipo && b.tipo === imovel.tipo) return 1;

                                // Ordena por proximidade de preço
                                const diffA = Math.abs(a.preco - imovel.preco);
                                const diffB = Math.abs(b.preco - imovel.preco);
                                return diffA - diffB;
                            })
                            .slice(0, 4) // Mostra até 4 imóveis similares
                            .map((similarImovel) => (
                                <Link
                                    key={similarImovel.id}
                                    to={`/imovel/${similarImovel.id}`}
                                    className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={similarImovel.imagem}
                                        alt={`Imóvel ${similarImovel.id}`}
                                        className="w-full h-40 sm:h-48 object-cover"
                                    />
                                    <div className="p-3 sm:p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary" className="text-xs">
                                                {similarImovel.tipo}
                                            </Badge>
                                            {similarImovel.bairro === imovel.bairro && (
                                                <Badge variant="outline" className="text-xs">
                                                    Mesmo bairro
                                                </Badge>
                                            )}
                                        </div>
                                        <h3 className="font-semibold text-base sm:text-lg mb-2">
                                            {formatPrice(similarImovel.preco)}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {similarImovel.endereco}
                                        </p>

                                        {/* Características - Layout mobile otimizado */}
                                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <Bed className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                {similarImovel.quartos}
                                            </span>
                                            <span className="flex items-center">
                                                <Bath className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                {similarImovel.banheiros}
                                            </span>
                                            <span className="flex items-center">
                                                <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                {similarImovel.area}m²
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>

                    {/* Botão para ver mais imóveis */}
                    {mockImoveis.filter(item => item.id !== imovel.id).length > 4 && (
                        <div className="text-center mt-6 sm:mt-8">
                            <Button
                                variant="outline"
                                onClick={() => navigate('/imoveis')}
                                className="px-6 sm:px-8"
                                size="sm"
                            >
                                Ver todos os imóveis
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Sheet Mobile - Ações fixas */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
                <div className="flex items-center justify-between max-w-screen-sm mx-auto">
                    {/* Preço destacado */}
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Preço</span>
                        <span className="text-lg font-bold text-[#5e0d12]">
                            {formatPrice(imovel.preco)}
                        </span>
                    </div>

                    {/* Botões de ação */}
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-10 px-4">
                            <Star className="w-4 h-4 mr-1" />
                            Favoritar
                        </Button>
                        <Button className="bg-[#5e0d12] hover:bg-[#7a1a1f] h-10 px-6" size="sm">
                            Contatar
                        </Button>
                    </div>
                </div>
            </div>

            {/* Espaçamento para compensar o bottom sheet em mobile */}
            <div className="lg:hidden h-20"></div>
        </>
    );
}


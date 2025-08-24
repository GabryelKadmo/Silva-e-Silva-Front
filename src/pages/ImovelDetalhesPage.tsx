import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { mockImoveis } from "../data/mockImoveis";
import { Button } from "../components/ui/button";
import { ArrowLeft, MapPin, Bed, Bath, Home, Car, Star } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import LogoPng from "/LogoWhitePng.png";

export default function ImovelDetalhesPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [imagemPrincipalIndex, setImagemPrincipalIndex] = useState(0);

    const imovel = mockImoveis.find((item) => item.id === Number(id)); if (!imovel) {
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

    // Mock de imagens adicionais (incluindo a principal repetida)
    const mockImages = [
        imovel.imagem, // Imagem principal
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Sala",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Quarto",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Cozinha",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Banheiro",
        "https://placehold.co/800x600/6b7280/ffffff.png?text=Varanda",
    ];


    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header com botão voltar */}
            <div className="mb-6">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                </Button>

                <div className="flex items-start justify-between">
                    <div>
                        <Badge variant="secondary" className="mb-2">
                            {imovel.tipo}
                        </Badge>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {imovel.endereco}
                        </h1>
                        <div className="flex items-center text-gray-600">
                            {/* <MapPin className="w-4 h-4 mr-1" /> */}
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Galeria de Imagens */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <img
                            src={mockImages[imagemPrincipalIndex]}
                            alt="Imagem principal do imóvel"
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                            loading="eager"
                            decoding="async"
                        />
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
                        {mockImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Imagem ${index + 1} do imóvel`}
                                className={`w-full h-20 object-cover rounded cursor-pointer transition-all ${imagemPrincipalIndex === index
                                    ? 'ring-2 ring-[#5e0d12] opacity-100'
                                    : 'hover:opacity-80'
                                    }`}
                                onClick={() => setImagemPrincipalIndex(index)}
                            />
                        ))}
                    </div>

                    {/* Descrição */}
                    <div className="bg-white rounded-lg border p-6">
                        <h2 className="text-xl font-semibold mb-4">Sobre este imóvel</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {imovel.descricao}
                        </p>

                        <Separator className="my-6" />

                        <h3 className="text-lg font-semibold mb-4">Características do Imóvel</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    </div>
                </div>

                {/* Sidebar com informações de contato */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
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
                                    Entrar em Contato
                                </Button>

                                <Button variant="outline" className="w-full" size="lg">
                                    WhatsApp
                                </Button>

                                <Button variant="outline" className="w-full" size="lg">
                                    Telefone
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
                </div>
            </div>

            {/* Imóveis relacionados */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Imóveis Similares</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">
                                            {similarImovel.tipo}
                                        </Badge>
                                        {similarImovel.bairro === imovel.bairro && (
                                            <Badge variant="outline" className="text-xs">
                                                Mesmo bairro
                                            </Badge>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {formatPrice(similarImovel.preco)}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {similarImovel.endereco}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center">
                                            <Bed className="w-4 h-4 mr-1" />
                                            {similarImovel.quartos}
                                        </span>
                                        <span className="flex items-center">
                                            <Bath className="w-4 h-4 mr-1" />
                                            {similarImovel.banheiros}
                                        </span>
                                        <span className="flex items-center">
                                            <Home className="w-4 h-4 mr-1" />
                                            {similarImovel.area}m²
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>

                {/* Botão para ver mais imóveis */}
                {mockImoveis.filter(item => item.id !== imovel.id).length > 4 && (
                    <div className="text-center mt-8">
                        <Button
                            variant="outline"
                            onClick={() => navigate('/imoveis')}
                            className="px-8"
                        >
                            Ver todos os imóveis
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}


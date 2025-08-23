import { Button } from "@/components/ui/button";
import { FaBuilding, FaClock, FaEye, FaMapMarkedAlt, FaMicrochip, FaPercentage, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigateToImoveis = () => {
    navigate("/imoveis");
  };

  return (
    <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1260px] flex-1">

        {/* ===== SEÇÃO HERO (Banner Principal) ===== */}
        <div className="@container">
          <div className="px-4 @[480px]:p-4">
            <div
              className="flex min-h-[520px] lg:min-h-[580px] flex-col gap-6 bg-cover bg-no-repeat @[480px]:gap-8 rounded-lg @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
               style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://i.imgur.com/TEtjzR2.png")`,
                backgroundPosition: 'center 20%'
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Todo mundo conhece um Silva
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Explore uma ampla gama de propriedades adaptadas às suas necessidades e preferências. Nossa equipe especializada está aqui para guiá-lo em cada etapa do processo.
                </h2>
              </div>
              <Button onClick={handleNavigateToImoveis} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] leading-normal @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Explorar Propriedades</span>
              </Button>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO IMÓVEIS EM DESTAQUE ===== */}
        <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 py-10">
          Imóveis em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative overflow-hidden">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80")'
                }}
              ></div>
              <div className="absolute top-4 left-4 bg-[#5e0d12] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Casa
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#5e0d12] px-3 py-1 rounded-full text-sm font-bold">
                R$ 750.000
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[#1b0e0f] text-lg font-bold leading-tight mb-2">Casa Clássica Moderna</h3>
              <p className="text-[#955055] text-sm leading-relaxed mb-4">
                Residência de 4 quartos com arquitetura contemporânea, jardim paisagístico e área gourmet completa.
              </p>
              <div className="flex items-center justify-between text-xs text-[#955055]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  4 quartos • 3 banheiros
                </span>
                <span>280m²</span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative overflow-hidden">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                }}
              ></div>
              <div className="absolute top-4 left-4 bg-[#5e0d12] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Apartamento
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#5e0d12] px-3 py-1 rounded-full text-sm font-bold">
                R$ 450.000
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[#1b0e0f] text-lg font-bold leading-tight mb-2">Apartamento Sofisticado</h3>
              <p className="text-[#955055] text-sm leading-relaxed mb-4">
                Loft moderno de 2 quartos com vista panorâmica, acabamentos premium e localização privilegiada no centro.
              </p>
              <div className="flex items-center justify-between text-xs text-[#955055]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  2 quartos • 2 banheiros
                </span>
                <span>120m²</span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative overflow-hidden">
              <div
                className="w-full h-64 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                }}
              ></div>
              <div className="absolute top-4 left-4 bg-[#5e0d12] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Casa
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#5e0d12] px-3 py-1 rounded-full text-sm font-bold">
                R$ 1.850.000
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[#1b0e0f] text-lg font-bold leading-tight mb-2">Mansão de Alto Padrão</h3>
              <p className="text-[#955055] text-sm leading-relaxed mb-4">
                Residência exclusiva de 5 quartos com piscina infinita, cinema privativo e sistema de automação completo.
              </p>
              <div className="flex items-center justify-between text-xs text-[#955055]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  5 quartos • 6 banheiros
                </span>
                <span>650m²</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO CTA ANUNCIE AQUI ===== */}
        <div className="mx-4 my-12">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            {/* Imagem de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
              }}
            ></div>
            {/* Degradê sobreposto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5e0d12]/80 via-[#7a1119]/100 to-[#5e0d12]/80"></div>
            <div className="relative px-6 py-12 md:px-12 md:py-16">
              <div className="mx-auto max-w-3xl text-center">

                {/* Conteúdo Principal */}
                <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                  Tem um imóvel para anunciar?
                </h2>
                <p className="mb-8 text-base text-white/90 md:text-lg">
                  Transforme sua propriedade em oportunidade de negócio
                </p>

                {/* Benefícios Compactos */}
                <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">✓</span>
                    Avaliação Gratuita
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">✓</span>
                    Marketing Digital
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">✓</span>
                    Suporte Completo
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button className="bg-white text-[#5e0d12] hover:bg-white/90 h-12 px-6 text-base font-semibold min-w-[180px] transition-all duration-300">
                    Anunciar Meu Imóvel
                  </Button>
                  <Button variant="outline" className="border border-white/30 text-white hover:bg-white/10 hover:text-white h-12 px-6 text-base font-medium min-w-[180px] bg-transparent">
                    Falar com Consultor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ===== SEÇÃO SOBRE NÓS ===== */}
        <div className="px-4 py-16 md:py-6" id="about">
          <div className="max-w-7xl">
            {/* Cabeçalho da seção */}
            {/* <div className="text-center mb-16">
              <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
                Sobre a Silva & Silva
              </h2>
              <div className="w-24 h-1 bg-[#5e0d12] mx-auto rounded-full"></div>
            </div> */}

            {/* Grid principal */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              {/* Lado esquerdo - Texto principal */}
              <div className="space-y-6">
                <h3 className="text-[#1b0e0f] text-2xl md:text-3xl font-bold leading-tight">
                  Mais de <span className="text-[#5e0d12]">15 anos</span> transformando sonhos em realidade
                </h3>
                <div className="space-y-4 text-base leading-relaxed">
                  <p className="text-[#955055]">
                    A <strong className="text-[#5e0d12] font-semibold">Silva & Silva</strong> nasceu da paixão de uma família em conectar pessoas aos seus lares ideais. Nossa história começou com dois irmãos que acreditavam que encontrar a casa perfeita deveria ser uma experiência única e memorável.
                  </p>
                  <p className="text-[#955055]">
                    Hoje, somos referência no mercado imobiliário pela nossa abordagem humanizada e pelo uso de tecnologia de ponta. Cada imóvel tem uma história, e nossa missão é encontrar a história perfeita para cada cliente.
                  </p>
                </div>

                {/* Estatísticas */}
                {/* <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#5e0d12]">500+</div>
                    <div className="text-sm text-[#955055] font-medium">Imóveis Vendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#5e0d12]">98%</div>
                    <div className="text-sm text-[#955055] font-medium">Clientes Satisfeitos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#5e0d12]">15+</div>
                    <div className="text-sm text-[#955055] font-medium">Anos de Experiência</div>
                  </div>
                </div> */}
              </div>

              {/* Lado direito - Imagem */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="w-full h-80 md:h-96 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://i.imgur.com/JhWHd9t.png")',
                      imageRendering: '-webkit-optimize-contrast',
                      // filter: 'contrast(1) brightness(1.05)',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  ></div>
                  {/* Overlay com padrão */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#5e0d12]/20 to-transparent"></div> */}
                </div>
              </div>
            </div>

            {/* Seção de valores/diferenciais */}
            <div className="border-t border-[#e6d1d2] pt-6">
              <h4 className="text-[#1b0e0f] text-xl font-bold text-center my-16">
                Nossos Diferenciais
              </h4>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Diferencial 1 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaUserFriends className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Consultoria Especializada</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Suporte completo para quem deseja alugar, comprar ou financiar, com orientação feita por especialistas em cada etapa.
                  </p>
                </div>

                {/* Diferencial 2 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaMicrochip className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Plataforma 100% Digital</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Pesquise, agende visitas virtuais, envie propostas e acompanhe seu financiamento sem burocracia, tudo online.
                  </p>
                </div>

                {/* Diferencial 3 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaEye className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Negócios Transparentes</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Informações claras sobre valores, contratos e condições de financiamento, garantindo segurança em cada decisão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO LANÇAMENTOS EXCLUSIVOS NA PLANTA ===== */}
        <div className="px-4 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Cabeçalho da seção */}
            <div className="text-center mb-16">
              <h2 className="text-[#1b0e0f] text-3xl md:text-4xl font-bold leading-tight mb-4">
                Empreendimentos <span className="text-[#5e0d12]">na Planta</span>
              </h2>
              <p className="text-[#955055] text-lg max-w-2xl mx-auto">
                Oportunidades únicas com preços promocionais e condições especiais para quem investe no futuro
              </p>
            </div>

            {/* Grid de lançamentos */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Lançamento 1 */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                    }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#5e0d12] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      LANÇAMENTO
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#5e0d12] px-3 py-2 rounded-lg text-sm font-bold">
                    A partir de R$ 380.000
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1b0e0f] text-xl font-bold mb-2">Residencial Aurora</h3>
                  <p className="text-[#955055] text-sm mb-4">
                    Apartamentos de 2 e 3 quartos com varanda gourmet, área de lazer completa e localização privilegiada.
                  </p>

                  {/* Timeline e informações */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <FaClock className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Entrega: <strong className="text-[#1b0e0f]">Dezembro 2026</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FaMapMarkedAlt className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Bairro Jardins - SP</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FaPercentage className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Financiamento: <strong className="text-[#1b0e0f]">Até 100% FGTS</strong></span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#5e0d12] hover:bg-[#4a0a0f] text-white h-10 text-sm font-semibold">
                      Ver Plantas
                    </Button>
                    <Button variant="outline" className="flex-1 bg-white/30 border-[#5e0d12] text-[#5e0d12] hover:text-[#5e0d12] h-10 text-sm font-medium">
                      Agendar Visita
                    </Button>
                  </div>
                </div>
              </div>

              {/* Lançamento 2 */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                    }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#5e0d12] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      PRÉ-LANÇAMENTO
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#5e0d12] px-3 py-2 rounded-lg text-sm font-bold">
                    A partir de R$ 850.000
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1b0e0f] text-xl font-bold mb-2">Vila Harmonia</h3>
                  <p className="text-[#955055] text-sm mb-4">
                    Casas em condomínio fechado com 3 e 4 quartos, área gourmet privativa e sistema de energia solar.
                  </p>

                  {/* Timeline e informações */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <FaClock className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Entrega: <strong className="text-[#1b0e0f]">Junho 2027</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FaMapMarkedAlt className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Alphaville - SP</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FaPercentage className="w-4 h-4 text-[#5e0d12]" />
                      <span className="text-[#955055]">Entrada: <strong className="text-[#1b0e0f]">Apenas 10%</strong></span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#5e0d12] hover:bg-[#4a0a0f] text-white h-10 text-sm font-semibold">
                      Ver Plantas
                    </Button>
                    <Button variant="outline" className="flex-1 bg-white/30 border-[#5e0d12] text-[#5e0d12] hover:text-[#5e0d12] h-10 text-sm font-medium">
                      Agendar Visita
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de vantagens */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-[#1b0e0f] text-2xl font-bold text-center mb-8">
                Vantagens de Comprar na Planta
              </h3>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPercentage className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h4 className="text-[#1b0e0f] font-bold mb-2">Preços Promocionais</h4>
                  <p className="text-[#955055] text-sm">Descontos exclusivos e valores diferenciados para primeiros compradores</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h4 className="text-[#1b0e0f] font-bold mb-2">Facilidade de Pagamento</h4>
                  <p className="text-[#955055] text-sm">Parcelas durante a obra e financiamento com as melhores condições</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkedAlt className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h4 className="text-[#1b0e0f] font-bold mb-2">Localização Privilegiada</h4>
                  <p className="text-[#955055] text-sm">Empreendimentos em regiões valorizadas com potencial de crescimento</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBuilding className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h4 className="text-[#1b0e0f] font-bold mb-2">Imóvel Novo</h4>
                  <p className="text-[#955055] text-sm">Tecnologia moderna, acabamentos novos e garantia da construtora</p>
                </div>
              </div>
            </div>

            {/* Call to action final */}
            <div className="text-center mt-16">
              <h3 className="text-[#1b0e0f] text-2xl font-bold mb-4">
                Quer saber mais sobre nossos lançamentos?
              </h3>
              <p className="text-[#955055] mb-8 max-w-2xl mx-auto">
                Cadastre-se e receba em primeira mão informações sobre novos empreendimentos, condições especiais e oportunidades exclusivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button className="flex-1 bg-[#5e0d12] hover:bg-[#4a0a0f] text-white h-12 text-base font-semibold">
                  Cadastrar Interesse
                </Button>
                <Button variant="outline" className="flex-1 bg-white/30 border-[#5e0d12] text-[#5e0d12] hover:text-[#5e0d12] h-12 px-6 text-base font-medium min-w-[180px]">
                  Falar com Consultor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

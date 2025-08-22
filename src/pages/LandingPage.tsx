import { Button } from "@/components/ui/button";
import { FaUserFriends, FaMicrochip, FaEye } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1260px] flex-1">

        {/* ===== SEÇÃO HERO (Banner Principal) ===== */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[520px] lg:min-h-[580px] flex-col gap-6 bg-cover bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://i.imgur.com/oCkWnf9.jpeg")`,
                backgroundPosition: 'center 20%'
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Encontre o lar perfeito
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Explore uma ampla gama de propriedades adaptadas às suas necessidades e preferências. Nossa equipe especializada está aqui para guiá-lo em cada etapa do processo.
                </h2>
              </div>
              <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] leading-normal @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
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
                Mansão
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

                {/* Informação Adicional */}
                {/* <div className="mt-6 text-center">
                  <p className="text-xs text-white/60">
                    🏆 Mais de <span className="font-semibold text-white/80">500 imóveis vendidos</span> •
                    ⭐ <span className="font-semibold text-white/80">4.9/5</span> de satisfação
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO NOSSOS SERVIÇOS ===== */}
        <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 py-10">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d2] bg-[#fbf8f9] p-4 flex-col">
            <div className="text-[#1b0e0f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e0f] text-base font-bold leading-tight">Compra</h2>
              <p className="text-[#955055] text-sm font-normal leading-normal">
                Encontre a casa perfeita para você e sua família.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d2] bg-[#fbf8f9] p-4 flex-col">
            <div className="text-[#1b0e0f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e0f] text-base font-bold leading-tight">Venda</h2>
              <p className="text-[#955055] text-sm font-normal leading-normal">
                Venda seu imóvel com a ajuda de nossos especialistas.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d2] bg-[#fbf8f9] p-4 flex-col">
            <div className="text-[#1b0e0f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e0f] text-base font-bold leading-tight">Aluguel</h2>
              <p className="text-[#955055] text-sm font-normal leading-normal">
                Alugue o imóvel ideal com as melhores condições.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d2] bg-[#fbf8f9] p-4 flex-col">
            <div className="text-[#1b0e0f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e0f] text-base font-bold leading-tight">Consultoria</h2>
              <p className="text-[#955055] text-sm font-normal leading-normal">
                Conte com nossa consultoria para tomar as melhores decisões.
              </p>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO SOBRE NÓS ===== */}
        <div className="px-4 py-16 md:py-24">
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
                <div className="grid grid-cols-3 gap-4 pt-6">
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
                </div>
              </div>

              {/* Lado direito - Imagem */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="w-full h-80 md:h-96 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                    }}
                  ></div>
                  {/* Overlay com padrão */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#5e0d12]/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Seção de valores/diferenciais */}
            <div className="border-t border-[#e6d1d2] pt-16">
              <h4 className="text-[#1b0e0f] text-xl font-bold text-center my-16">
                Nossos Diferenciais
              </h4>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Diferencial 1 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaUserFriends className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Atendimento Personalizado</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Cada cliente recebe atenção exclusiva com consultores especializados em suas necessidades específicas.
                  </p>
                </div>

                {/* Diferencial 2 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaMicrochip className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Tecnologia Avançada</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Utilizamos ferramentas modernas como tours virtuais, IA para precificação e CRM integrado.
                  </p>
                </div>

                {/* Diferencial 3 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-[#5e0d12]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5e0d12]/20 transition-colors duration-300">
                    <FaEye className="w-8 h-8 text-[#5e0d12]" />
                  </div>
                  <h5 className="text-[#1b0e0f] font-bold mb-2">Transparência Total</h5>
                  <p className="text-[#955055] text-sm leading-relaxed">
                    Processo claro desde o primeiro contato, com relatórios detalhados e comunicação constante.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 bg-[#5e0d12]/5 text-[#5e0d12] px-6 py-3 rounded-full text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Conheça nossa equipe e descubra como podemos ajudar você
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO CALL TO ACTION (Chamada Final) ===== */}
        <div className="@container">
          <div className="flex flex-col items-center justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#1b0e0f] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Pronto para encontrar o lar dos seus sonhos?
              </h1>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center">
                <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                  <span className="truncate">Fale Conosco</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

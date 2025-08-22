import { Button } from "@/components/ui/button";

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

        {/* ===== SEÇÃO DEPOIMENTOS DE CLIENTES ===== */}
        <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 py-10">
          Depoimentos de Clientes
        </h2>
        <div className="flex flex-col gap-8 overflow-x-hidden p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4uf3EMWjvFAJvQD5FooK30NSKPjNh3Abu4udh_qif-nmyMYCy7gs-nWXmFkHnw3do6L777cHwKxICz53eHyuwt70iHjuPs586D3n6g-v1GMlZOZmsvKXQ-bZUIFFrfU_lfO3iK9_uze5YQ_Np_NH0Vz-4pkTVLV-7E6waXraozwqOsyuleY5mDvezEfMl5SPqpbRZbsOuCZtcMU9xBQPuGaza5yV_gtK77Loq1b_q3gEJa7PNj45FcaI74NIweW49Y744SKECH3c")'
                }}
              ></div>
              <div className="flex-1">
                <p className="text-[#1b0e0f] text-base font-medium leading-normal">Sofia Almeida</p>
                <p className="text-[#955055] text-sm font-normal leading-normal">2023-08-15</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-[#5e0d12]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#1b0e0f] text-base font-normal leading-normal">
              A Imobiliária me ajudou a encontrar a casa dos meus sonhos! O atendimento foi excelente e o processo muito tranquilo.
            </p>
            <div className="flex gap-9 text-[#955055]">
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                </div>
                <p className="text-inherit">10</p>
              </button>
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                </div>
                <p className="text-inherit">2</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnvrMq5aJs9MwIKoHRT9w-LoonV9EWd39wGvOqdTc6CLPZXL1M4Gul4hLJ8jhq289OA7UHrMFhoSuvkhc9k_CUqeLGaC-OwgOxmVL4EnJwHkR30ZK8h4PAP99Qw_8w09SJ9Mnvs_6_6xcCkcOuf3GCU4mnoXokt9jHxUZ822TpK6YW7oNaATkn88L5Jx3DPCz0-a0k0fhLQnHKBTdwG5mWgeP1xgN1XLge7vENeeMJkrUgyiegiDtqPpY5qNFW9SirLqjRgocVbDQ")'
                }}
              ></div>
              <div className="flex-1">
                <p className="text-[#1b0e0f] text-base font-medium leading-normal">Carlos Pereira</p>
                <p className="text-[#955055] text-sm font-normal leading-normal">2023-09-22</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-[#5e0d12]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                </div>
              ))}
              <div className="text-[#d4afb2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#1b0e0f] text-base font-normal leading-normal">
              A equipe da Imobiliária foi muito profissional e me ajudou a vender meu imóvel rapidamente.
            </p>
            <div className="flex gap-9 text-[#955055]">
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                </div>
                <p className="text-inherit">8</p>
              </button>
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                </div>
                <p className="text-inherit">1</p>
              </button>
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
        <h2 className="text-[#1b0e0f] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 py-10">
          Sobre Nós
        </h2>
        <p className="text-[#1b0e0f] text-base leading-normal pb-3 pt-1 px-4">
          A Imobiliária é uma empresa com anos de experiência no mercado imobiliário, comprometida em oferecer
          serviços de alta qualidade e atendimento personalizado. Nossa
          missão é ajudar nossos clientes a realizar seus sonhos, seja comprando, vendendo ou alugando um imóvel.
          Valorizamos a transparência, a ética e a excelência em tudo o
          que fazemos.
        </p>

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

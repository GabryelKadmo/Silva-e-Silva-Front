
export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-evenly">
                <a className="text-[#955055] text-base font-normal leading-normal min-w-40" href="#">
                    Sobre Nós
                </a>
                <a className="text-[#955055] text-base font-normal leading-normal min-w-40" href="#">
                    Contato
                </a>
                <a className="text-[#955055] text-base font-normal leading-normal min-w-40" href="#">
                    Política de Privacidade
                </a>
                <a className="text-[#955055] text-base font-normal leading-normal min-w-40" href="#">
                    Termos de Serviço
                </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <a target="_blank" href="https://www.instagram.com/silvaesilvaimobiliaria/">
                    <div className="text-[#955055]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                        </svg>
                    </div>
                </a>
            </div>
            <p className="text-[#955055] text-base font-normal leading-normal">
                © 2024 Silva e Silva. Todos os direitos reservados.
            </p>
        </footer>
    )
}

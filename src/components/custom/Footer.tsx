
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#1b0e0f] text-white mt-16">
            <div className="max-w-[1260px] mx-auto px-4 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo e Descrição */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src="/LogoWhitePng.png" alt="Silva & Silva Logo" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold">Silva & Silva Imobiliária</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                            Há mais de uma década conectando pessoas aos seus lares ideais. Nossa missão é transformar sonhos em realidade através de um atendimento personalizado e expertise no mercado imobiliário.
                        </p>
                        {/* Redes Sociais */}
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/silvaesilvaimobiliaria/" target="_blank" className="w-10 h-10 bg-[#5e0d12] hover:bg-[#4a0a0f] rounded-lg flex items-center justify-center transition-colors">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Início</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Comprar</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Alugar</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lançamentos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Anuncie</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <FaPhone className="w-4 h-4 text-white flex-shrink-0" />
                                <span>(16) 9 9407-5014</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <FaEnvelope className="w-4 h-4 text-white flex-shrink-0" />
                                <span>contato@silvaesilvaimobiliaria.com.br</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-400">
                        © 2025 Silva & Silva Imobiliária. Todos os direitos reservados.
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">CRECI: 12345-J</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

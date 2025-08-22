import { useState, useEffect } from "react"
import { X } from "lucide-react"
import LogoPng from "/LogoPng.png"
import { Button } from "../ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       setIsMenuOpen(false)
  //     }
  //   }
  //   document.addEventListener('keydown', handleEsc)
  //   return () => document.removeEventListener('keydown', handleEsc)
  // }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e8e9] px-4 sm:px-6 lg:px-10 py-3 bg-white z-40">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={LogoPng} alt="Silva & Silva Logo" className="w-12 sm:w-16 lg:w-20 object-contain drop-shadow-md" />
          <h1 className="hidden sm:block text-sm sm:text-base lg:text-lg font-bold text-[#5a1317]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="hidden lg:inline">Silva & Silva Imobiliária</span>
            <span className="lg:hidden">Silva & Silva</span>
          </h1>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#1C0D0F] text-md font-medium leading-normal hover:text-[#5a1317] transition-colors" href="#">Comprar</a>
            <a className="text-[#1C0D0F] text-md font-medium leading-normal hover:text-[#5a1317] transition-colors" href="#">Alugar</a>
            <a className="text-[#1C0D0F] text-md font-medium leading-normal hover:text-[#5a1317] transition-colors" href="#">Lançamentos</a>
            <a className="text-[#1C0D0F] text-md font-medium leading-normal hover:text-[#5a1317] transition-colors" href="#">Anuncie</a>
            <a className="text-[#1C0D0F] text-md font-medium leading-normal hover:text-[#5a1317] transition-colors" href="#">Sobre</a>
          </div>
          <Button className="min-w-[84px] max-w-[480px] h-10 px-4 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] text-sm font-bold tracking-[0.015em]">
            Entrar
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <Button
            size="sm"
            className="h-8 px-3 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] text-xs font-bold"
          >
            Entrar
          </Button>

          <button
            onClick={toggleMenu}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5a1317]/20"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-center items-center relative">
              <span
                className={`block h-0.5 w-6 bg-[#1C0D0F] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1C0D0F] transition-all duration-300 ease-in-out my-1 ${isMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1C0D0F] transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img src={LogoPng} alt="Silva & Silva Logo" className="w-12 object-contain" />
              <h2 className="text-lg font-bold text-[#5a1317]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Silva & Silva
              </h2>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5 text-[#1C0D0F]" />
            </button>
          </div>

          <nav className="flex-1 py-6">
            <div className="flex flex-col space-y-2 px-6">
              <a
                className="flex items-center px-4 py-4 text-[#1C0D0F] text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-[#5a1317] transition-all duration-200 transform hover:translate-x-1"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-3">Comprar</span>
              </a>
              <a
                className="flex items-center px-4 py-4 text-[#1C0D0F] text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-[#5a1317] transition-all duration-200 transform hover:translate-x-1"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-3">Alugar</span>
              </a>
              <a
                className="flex items-center px-4 py-4 text-[#1C0D0F] text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-[#5a1317] transition-all duration-200 transform hover:translate-x-1"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-3">Lançamentos</span>
              </a>
              <a
                className="flex items-center px-4 py-4 text-[#1C0D0F] text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-[#5a1317] transition-all duration-200 transform hover:translate-x-1"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-3">Anuncie</span>
              </a>
              <a
                className="flex items-center px-4 py-4 text-[#1C0D0F] text-lg font-medium rounded-xl hover:bg-gray-50 hover:text-[#5a1317] transition-all duration-200 transform hover:translate-x-1"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-3">Sobre</span>
              </a>
            </div>
          </nav>

          <div className="p-6 border-t border-gray-100">
            <Button
              className="w-full h-12 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] text-sm font-bold tracking-[0.015em] rounded-xl transition-all duration-200 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Fazer Login
            </Button>
            <p className="text-center text-xs text-gray-500 mt-4">
              © 2025 Silva & Silva Imobiliária
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

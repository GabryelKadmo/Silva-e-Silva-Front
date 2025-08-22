import LogoPng from "/LogoPng.png"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e8e9] px-10 py-3">
      <div className="flex items-center gap-1 cursor-pointer">
        <img src={LogoPng} alt="Silva & Silva Logo" className="w-20 object-contain drop-shadow-md" />
        <h1 className="text-lg font-bold text-[#5a1317]" style={{fontFamily: 'Poppins, sans-serif'}}>Silva & Silva Imobiliária</h1>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#1C0D0F] text-md font-medium leading-normal" href="#">Comprar</a>
          <a className="text-[#1C0D0F] text-md font-medium leading-normal" href="#">Alugar</a>
          <a className="text-[#1C0D0F] text-md font-medium leading-normal" href="#">Financiamento</a>
        </div>
        <Button className="min-w-[84px] max-w-[480px] h-10 px-4 bg-[#5e0d12] hover:bg-[#4a0a0f] text-[#fbf8f9] text-sm font-bold tracking-[0.015em]">
          Entrar
        </Button>
      </div>
    </header>
  )
}

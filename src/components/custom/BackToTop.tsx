import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar o botão quando o usuário rolar para baixo
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed cursor-pointer bottom-6 right-6 z-50 bg-[#5e0d12] hover:bg-[#4a0a0f] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#5e0d12] focus:ring-opacity-50"
                    aria-label="Voltar ao topo"
                    title="Voltar ao topo"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
};

export default BackToTop;

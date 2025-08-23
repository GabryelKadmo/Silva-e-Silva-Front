import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Desabilita temporariamente o scroll suave
        document.documentElement.classList.add('no-smooth-scroll');
        document.body.classList.add('no-smooth-scroll');

        // Scroll instantâneo para o topo quando a rota mudar
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto' // Força comportamento instantâneo
        });

        // Fallback para garantir scroll instantâneo
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Remove a classe após um pequeno delay para restaurar scroll suave normal
        const timer = setTimeout(() => {
            document.documentElement.classList.remove('no-smooth-scroll');
            document.body.classList.remove('no-smooth-scroll');
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

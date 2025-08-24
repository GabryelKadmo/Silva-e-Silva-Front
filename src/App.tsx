import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/custom/BackToTop";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ImoveisPage from "./pages/ImoveisPage";
import ImovelDetalhesPage from "./pages/ImovelDetalhesPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/imoveis" element={<ImoveisPage />} />
            <Route path="/imovel/:id" element={<ImovelDetalhesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;

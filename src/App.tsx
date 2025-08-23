import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/custom/Header";
import Footer from "./components/custom/Footer";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ImoveisPage from "./pages/ImoveisPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/imoveis" element={<ImoveisPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/Home.tsx";
import SobreNos from "./pages/sobreNos/SobreNos.tsx";
import Contato from "./pages/contato/Contato.tsx";

import'./App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobreNos" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
  )
}

export default App

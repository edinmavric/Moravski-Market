import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ONama from './components/oNama';
import Kontakt from './components/Kontakt';
import Nalog from './components/Nalog';
import Prodavnica from './pages/Prodavnica';
import Naslovna from './components/naslovna';
import Wishlist from './components/wishlist';
import SideBar from './components/SideBar';
import ProductPage from './pages/ProductPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <Navbar onMenuClick={handleMenuClick} />
      <SideBar open={sidebarOpen} onClose={handleSidebarClose} />
      <Routes>
        <Route path="/" element={<Naslovna />} />
        <Route path='/o-nama' element={<ONama />} />
        <Route path="/prodavnica/:category?" element={<Prodavnica />} />
        <Route path="/proizvod/:id/:slug" element={<ProductPage />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/nalog' element={<Nalog />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/nalog" element={<Nalog />} />
        <Route path='/lista-zelja' element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

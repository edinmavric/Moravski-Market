import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ONama from './components/oNama';
import Kontakt from './components/Kontakt';
import Nalog from './components/Nalog';
import Prodavnica from './pages/Prodavnica';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/o-nama' element={<ONama />} />
        <Route path="/prodavnica/:category?" element={<Prodavnica />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/nalog' element={<Nalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ONama from './components/oNama';
import Kontakt from './components/Kontakt';
import Nalog from './components/Nalog';
import Naslovna from './components/naslovna';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Naslovna />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/nalog" element={<Nalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

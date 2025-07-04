import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ONama from './components/oNama';
import Kontakt from './components/Kontakt';
import Nalog from './components/Nalog';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/o-nama' element={<ONama />}/>
        <Route path='/kontakt' element={<Kontakt />}/>
        <Route path='/nalog' element={<Nalog />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

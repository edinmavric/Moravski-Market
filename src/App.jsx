import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

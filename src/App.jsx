import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div>hiiii</div>
    </BrowserRouter>
  );
}

export default App;

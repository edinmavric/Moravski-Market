import { Link } from 'react-router-dom';
import { Heart, Menu, PhoneCall, Search, ShoppingBag, Sun, User } from 'lucide-react';
import { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    e.preventDefault();
    console.log("Search submitted");//search logic is prestene
  };

  return (
    <header className="navbar">
      <div className="top-row">
        <img
          src="https://www.moravskimarket.rs/logo-white.png" //niko nece primetit bgt
          alt="Moravski Market Logo"
        />

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Pretraži proizvode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit"><Search /></button>
        </form>

        <div className="contact">
          <PhoneCall />
          <div className="contact-info">
            <div className="phone-number">061 67 15 941</div>
            <div className="hours">CALL CENTAR 09 - 18h</div>
          </div>
        </div>
      </div>

      <nav className="bottom-row">
        <div class="kategorije"><span><Menu /></span>KATEGORIJE</div>
        <ul className="nav-links">
          <li><Link to="/">Naslovna</Link></li>
          <li><Link to="/o-nama">O nama</Link></li>
          <li><Link to="/prodavnica">Prodavnica</Link></li>
          <li><Link to="/proizvodjaci">Proizvođači</Link></li>
          <li><Link to="/distributivni-centar">Distributivni centar</Link></li>
          <li><Link to="/novosti">Novosti</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
        <div className='icons'>
          <button><Sun /></button>
          <button><Heart /></button>
          <button><ShoppingBag /></button>
          <button><User /></button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


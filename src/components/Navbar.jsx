import { Link, NavLink } from 'react-router-dom';
import {
  Heart,
  Menu,
  Moon,
  PhoneCall,
  Search,
  ShoppingBag,
  Sun,
  User,
} from 'lucide-react';
import { useState } from 'react';
import './navbar.css';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [wishlistCount, setWishlistCount] = useState(1);
  const [cartCount, setCartCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    console.log('Search submitted'); //search logic is present
  };

  const addToWishlist = () => {
    setWishlistCount(prev => prev + 1); //useless rn but might be usefull later
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const navLinks = [
    { path: '/', label: 'Naslovna' },
    { path: '/o-nama', label: 'O nama' },
    { path: '/prodavnica', label: 'Prodavnica' },
    { path: '/proizvodjaci', label: 'Proizvođači' },
    { path: '/distributivni-centar', label: 'Distributivni centar' },
    { path: '/novosti', label: 'Novosti' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="navbar">
      <div className="top-row">
        <img
          src={
            theme === 'light'
              ? 'https://www.moravskimarket.rs/logo.png'
              : 'https://www.moravskimarket.rs/logo-white.png'
          }
          alt="Moravski Market Logo"
        />

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Pretraži proizvode..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <Search />
          </button>
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
        <div className="fix">
          <div
            className="kategorije"
            onClick={onMenuClick}
            style={{ cursor: 'pointer' }}
          >
            <span>
              <Menu />
            </span>
            KATEGORIJE
          </div>
          <ul className="nav-links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="icons">
          <button onClick={toggleTheme}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <div className="icon-with-badge">
            <Link to="/lista-zelja">
              <button>
                <Heart />
              </button>
            </Link>
            {wishlistCount > 0 && (
              <span className="badge">{wishlistCount}</span>
            )}
          </div>

          <div className="icon-with-badge">
            <button>
              <ShoppingBag />
            </button>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </div>

          <Link to="/nalog">
            <button>
              <User />
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

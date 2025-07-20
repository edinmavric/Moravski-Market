import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import './ItemCard.css';
import { useTheme } from "../context/ThemeContext";

const ItemCard = ({ product }) => {
  const { theme, toggleTheme } = useTheme();
  const productSlug = encodeURIComponent(product.name);
  const manufacturerSlug = encodeURIComponent(product.manufacturer);

  return (
    <div className={`card ${theme}`}>
      <Link to={`/proizvod/${product.id}/${productSlug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className={`card-info ${theme}`}>
        <div className={`heart ${theme}`}><Heart size={23} /></div>

        <p>
          {product.categories.map((cat, idx) => (
            <Link key={idx} to={`/prodavnica/${encodeURIComponent(cat)}`} className={`product-info ${theme}`}>
              {cat}
            </Link>
          ))} - <Link to={`/brend/${manufacturerSlug}`} className={`product-info ${theme}`}>
            {product.manufacturer}
          </Link>
        </p>

        <h3>
          <Link to={`/proizvod/${product.id}/${productSlug}`} className={`product-name ${theme}`}>
            {product.name}
          </Link>
        </h3>

        <h3 className="product-price">{product.price} RSD</h3>
      </div>

    </div >
  );
};

export default ItemCard;



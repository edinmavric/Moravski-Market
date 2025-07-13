import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import './ItemCard.css';

const ItemCard = ({ product }) => {
  const productSlug = encodeURIComponent(product.name);
  const manufacturerSlug = encodeURIComponent(product.manufacturer);

  return (
    <div className="card">
      <Link to={`/proizvod/${product.id}/${productSlug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-info">
        <div className="heart"><Heart size={23} /></div>

        <p>
          {product.categories.map((cat, idx) => (
            <Link key={idx} to={`/shop/${encodeURIComponent(cat)}`} className="product-info">
              <span>{cat}</span>{' '}
            </Link>
          ))} - <Link to={`/brend/${manufacturerSlug}`} className="product-info">
            <span>{product.manufacturer}</span>
          </Link>
        </p>

        <h3>
          <Link to={`/proizvod/${product.id}/${productSlug}`} className="product-name">
            {product.name}
          </Link>
        </h3>

        <h3 className="product-price">{product.price} RSD</h3>
      </div>

    </div>
  );
};

export default ItemCard;



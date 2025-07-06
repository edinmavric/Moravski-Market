import { Link, useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard.jsx';
import products from '../data/proizvodi.js';
import './Prodavnica.css'
const Prodavnica = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter((p) =>
      p.categories.includes(decodeURIComponent(category))
    )
    : products;

  const categoryCounts = {};
  products.forEach((product) => {
    product.categories.forEach((cat) => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
  });
  const categories = Object.entries(categoryCounts);
  return (
    <div className="containerProdavnica">
      <div className="shop">
        <div className="categories">
          <h2>KATEGORIJE</h2>
          <ul className="list">
            {categories.map(([cat, count]) => (
              <li key={cat} className="list-item">
                <Link to={`/prodavnica/${encodeURIComponent(cat)}`}>
                  {cat}<span className="cat-number">&nbsp;&nbsp;({count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="kartice">
          {filteredProducts.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Prodavnica;


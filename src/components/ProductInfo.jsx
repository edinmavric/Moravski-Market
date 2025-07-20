import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/proizvodi.js";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import "./ProductInfo.css";
import { useTheme } from "../context/ThemeContext.jsx";
const ProductInfo = () => {
  const { theme, toggleTheme } = useTheme();
  const { id, slug } = useParams();
  const [product, setProduct] = useState(null);
  const [number, SetNumber] = useState(1);

  useEffect(() => {
    const decodedSlug = decodeURIComponent(slug);
    const found = products.find(
      (p) => String(p.id) === id && p.name === decodedSlug
    );

    setProduct(found);
  }, [id, slug]);
  const increase = () => SetNumber(prev => (prev < 10 ? prev + 1 : prev));
  const decrease = () => SetNumber(prev => (prev > 1 ? prev - 1 : prev));

  if (!product) return <div>Proizvod nije pronađen.</div>;

  function handlePromenu(e) {
    const value = e.target.value;

    if (value === "") return;

    const num = Number(value);
    if (num < 1) return;
    if (num > 10) {
      alert("Maksimalno 10");
      return;
    }

    SetNumber(num);
  }


  return (
    <div className="product-page-info">
      <div className="product-pictures">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div>
        <p className={`${theme}`}>Kategorija: <Link className={`${theme}`} to={`/prodavnica/${encodeURIComponent(product.categories[0])}`}>{product.categories[0]}</Link></p>
        <p className={`${theme}`}>Proizvodjac: <Link className={`${theme}`} to={`/brend/${encodeURIComponent(product.manufacturer)}`}>{product.manufacturer}</Link></p>
        <h2 className={`${theme}`}>{product.name}</h2>
        <h3>{product.price} RSD</h3>
        <div className="product-buttons">
          <div className="very-pretty-button-borders">
            <button className={`${theme}`} onClick={decrease}><Minus /></button>
            <input
              type="number"
              value={number}
              onChange={handlePromenu}
              min={1}
              max={10}
              step="1"
              className={`${theme}`}
            />
            <button className={`${theme}`}
              onClick={increase}><Plus /></button>
          </div>
          <button className="add-to-cart"><ShoppingBag /> Dodajte u korpu</button>
        </div>
        <p>Prava potrošača: Zagarantovana sva prava kupaca po osnovu zakona o zaštiti potrošača.</p>
      </div>
    </div >
  );
};

export default ProductInfo;


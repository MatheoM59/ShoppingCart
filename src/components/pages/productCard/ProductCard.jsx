import { X } from 'lucide-react';
import { Header } from '../../header/Header';
import { Link, useParams } from 'react-router';
import products from '../../../data/products.json';
import styles from './style/productCard.module.css';

export const ProductCard = ({ cart, setCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const handleClick = () => {
    if (cart.find((c) => c.productId === parseInt(productId))) {
      setCart(
        cart.map((item) =>
          item.productId === parseInt(productId)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { productId: parseInt(productId), quantity: 1 }]);
    }
  };

  console.log(cart[0]);
  return (
    <div className={styles.container}>
      <Header cart={cart} />

      <div>
        <Link to={'/shop'}>
          <X className={styles.closeButton} />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={product.image} alt={product.name} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.infoTop}>
            <div className={styles.NameRef}>
              <h2>{product.name}</h2>
              <p>Réf.{product.id}</p>
            </div>
            <div className={styles.noteContainer}>
              <p className={styles.note}>Note globale : {product.rating}</p>
              <div className={styles.inputeNote}>
                <p>Votre avis nous interesse : </p>
                <select name="note" id="note" className={styles.filterSelect}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <h3>{product.price} €</h3>
          </div>
          <div className={styles.feature}>
            <h2>Description</h2>
            <h3>{product.description}</h3>
            <div className={styles.specsCate}>
              <div className={styles.specs}>
                <ul>
                  {product.specs.map((spec) => (
                    <li>{spec}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.category}>{product.category}</p>
            </div>
          </div>
          <div className={styles.panier}>
            <button onClick={handleClick}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

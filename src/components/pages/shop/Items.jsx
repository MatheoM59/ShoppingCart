import styles from './styles/items.module.css';
import { Link } from 'react-router';

export const Items = ({ type, data }) => {
  if (type === 'shop') {
    return (
      <div>
        <div className={styles.shopGrid}>
          {data.map((product) => (
            <div key={product.id} className={styles.shopProduct}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.shopProductImage}
              />
              <div className={styles.shopProductInfo}>
                <h3 className={styles.shopProductName}>{product.name}</h3>
                <p className={styles.shopProductPrice}>{product.price}€</p>
                <button className={styles.shopButton}>
                  <Link to={`/productCard/${product.id}`}>Voir le produit</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'recommandations') {
    return (
      <div className={styles.homeContainer}>
        {data.map((product) => (
          <div key={product.id} className={styles.homeProduct}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.homeProductImage}
            />
            <div className={styles.homeProductInfo}>
              <h3 className={styles.homeProductName}>{product.name}</h3>
              <p className={styles.homeProductPrice}>{product.price}€</p>
              <button className={styles.shopButton}>
                <Link to={`/productCard/${product.id}`}>Voir le produit</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

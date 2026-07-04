import styles from './styles/items.module.css';
import { useState } from 'react';
import { ProductCard } from './../../productCard/ProductCard';

export const Items = ({ type, data }) => {
  const [displayProduct, setDisplayProduct] = useState(false);
  const [displayedProduct, setDisplayedProduct] = useState();
  const handleClick = (produitId) => {
    console.log('Click! produitId:', produitId); // ← Ajoute ça
    setDisplayProduct(true);
    setDisplayedProduct(produitId);
  };
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
                <button
                  className={styles.shopButton}
                  onClick={() => handleClick(product.id)}
                >
                  Voir le produit
                </button>
              </div>
            </div>
          ))}
        </div>
        {displayProduct && (
          <ProductCard data={data} DisplayedProduct={displayedProduct} />
        )}
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
              <button className={styles.homeButton}>Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

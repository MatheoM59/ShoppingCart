import products from '../../../data/products.json';
import { Items } from '../shop/Items';
import styles from './styles/home.module.css';

export const Recommandations = ({ where, cart, setCart }) => {
  const topRated = products.filter((p) => p.rating >= 4.6);
  return (
    <div className={styles.section}>
      {where === 'home' && (
        <h2 className={styles.sectionTitle}>Les mieux notés 🌟</h2>
      )}
      {where === 'cart' && (
        <h2 className={styles.sectionTitle}>Nos recommandations 🌟</h2>
      )}
      <p className={styles.subtitle}>
        Découvrez nos produits les plus appréciés
      </p>
      <Items
        type={'recommandations'}
        data={topRated}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

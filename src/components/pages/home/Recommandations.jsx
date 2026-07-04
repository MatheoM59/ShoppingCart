import products from '../../../data/products.json';
import { Items } from '../shop/Items';
import styles from './styles/home.module.css';

export const Recommandations = () => {
  const topRated = products.filter((p) => p.rating >= 4.6);
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Les mieux notés 🌟</h2>
      <p className={styles.subtitle}>Découvrez nos produits les plus appréciés</p>
      <Items type={'recommandations'} data={topRated} />
    </div>
  );
};

import products from '../../../data/products.json';
import { Items } from '../shop/Items';
import styles from './styles/recommandations.module.css';

export const Recommandations = () => {
  const topRated = products.filter((p) => p.rating >= 4.6);
  return (
    <div className={styles.content}>
      <h2>Les mieux notés</h2>
      <Items type={'recommandations'} data={topRated} />
    </div>
  );
};

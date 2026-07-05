import styles from './styles/header.module.css';
import { Link } from 'react-router';
import { LucideShoppingBasket } from 'lucide-react';
export const Header = ({ cart }) => {
  const pastille = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <Link to="/" className={styles.link}>
          <h1>Desk'Shop</h1>
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <Link to="/" className={styles.link}>
          {/* <Home size={40} color={'black'} /> */}
          Home
        </Link>
        <Link to="/shop" className={styles.link}>
          {/* <Home size={40} color={'black'} /> */}
          Shop
        </Link>
        <div>
          <Link to="/cart" className={styles.link}>
            <LucideShoppingBasket size={40} color={'black'} />
          </Link>
          {pastille > 0 && <p className={styles.pastille}>{pastille}</p>}
        </div>
      </div>
    </div>
  );
};

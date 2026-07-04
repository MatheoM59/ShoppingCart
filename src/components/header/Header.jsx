import styles from './styles/header.module.css';
import { Link } from 'react-router';
import { LucideShoppingBasket } from 'lucide-react';
export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <Link to="/" className={styles.link}>
          <h1>Titre</h1>
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
        <Link to="/cart" className={styles.link}>
          <LucideShoppingBasket size={40} color={'black'} />
        </Link>
      </div>
    </div>
  );
};

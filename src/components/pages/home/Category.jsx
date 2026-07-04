import { Link } from 'react-router';
import styles from './styles/category.module.css';
export const Category = ({ categorys }) => {
  const topCategory = categorys.filter((c) => c.top === true);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Les meilleures catégories 🎮</h2>

      <div className={styles.container}>
        {topCategory.map((category) => (
          <Link to={`/shop/${category.id}`} key={category.id}>
            <div className={styles.categoryCard}>
              <div className={styles.imageWrapper}>
                <img src={category.image} alt={category.name} />
              </div>
              <div className={styles.info}>
                <p>{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

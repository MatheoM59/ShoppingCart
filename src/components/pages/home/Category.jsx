import { Link } from 'react-router';
import styles from './styles/category.module.css';
export const Category = ({ categorys }) => {
  const topCategory = categorys.filter((c) => c.top === true);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Les meilleurs catégories</h2>

      {topCategory.map((category) => (
        <Link to={`/shop/${category.id}`} className={styles.clickable}>
          <div key={category.id} className={styles.category}>
            <div>
              <p className={styles.categoryName}>{category.name}</p>
            </div>
            <div className={styles.categoryImage}>
              <img src={category.image} alt={category.name} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

import { Header } from '../../header/Header';
import styles from './style/cart.module.css';
import data from './../../../data/products.json';
import { Trash2 } from 'lucide-react';

export const Cart = ({ cart, setCart }) => {
  const nbProducts = cart.reduce((total, item) => total + item.quantity, 0);
  const productStore = data;
  const product = cart.map((item) => ({
    ...productStore.find((p) => p.id === item.productId),
    quantity: item.quantity,
  }));
  const quantity = [1, 2, 3, 4, 5];
  return (
    <>
      <Header cart={cart} />

      <div className={styles.title}>
        <h1>Panier</h1>
        <p>({nbProducts} produits)</p>
      </div>
      <div className={styles.products}>
        {product.map((item, index) => (
          <div className={styles.product}>
            <div className={styles.imgContainer}>
              <img src={item.image} alt={item.name} className={styles.img} />
            </div>
            <div className={styles.info}>
              <h4>{item.name}</h4>
              <div className={styles.quantity}>
                <select
                  value={item.quantity}
                  onChange={(e) => {
                    cart.find((c) => c.id === item.id);
                    setCart(
                      cart.map((item, idx) =>
                        idx === index
                          ? { ...item, quantity: parseInt(e.target.value) }
                          : item
                      )
                    );
                  }}
                  className={styles.filterSelect}
                >
                  {quantity.map((qnt, index) => (
                    <option key={qnt} value={qnt}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    cart.find((c) => c.id === item.id);
                    setCart(cart.filter((item, idx) => idx !== index));
                  }}
                >
                  <Trash2 />
                </button>
              </div>
            </div>

            <div className={styles.price}>
              <p>{item.price * item.quantity} €</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

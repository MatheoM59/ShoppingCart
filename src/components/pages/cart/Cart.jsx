import { Header } from '../../header/Header';
import styles from './style/cart.module.css';
import data from './../../../data/products.json';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { Recommandations } from '../home/Recommandations';

export const Cart = ({ cart, setCart }) => {
  const nbProducts = cart.reduce((total, item) => total + item.quantity, 0);
  const productStore = data;
  const product = cart.map((item) => ({
    ...productStore.find((p) => p.id === item.productId),
    quantity: item.quantity,
  }));
  const totalPrice = product.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const quantity = [1, 2, 3, 4, 5];
  return (
    <>
      <Header cart={cart} />

      <div className={styles.cart}>
        <div className={styles.title}>
          <h1>Panier</h1>
          <p>({nbProducts} produits)</p>
        </div>
        <div className={styles.content}>
          <div className={styles.products}>
            {product.map((item, index) => (
              <div className={styles.product}>
                <div className={styles.imgContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  <Link to={`/productCard/${item.id}`}>
                    <h4>{item.name}</h4>
                  </Link>
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
          <div className={styles.right}>
            <div className={styles.valid}>
              <button>Valider mon panier</button>
            </div>
            <div className={styles.recap}>
              <h3>Récapitulatif</h3>
              <div className={styles.recapInfo}>
                <p>Produit ({nbProducts})</p>
                <div className={styles.totalPrice}>
                  <h4>Total</h4>
                  <p>{totalPrice} €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommandations where={'cart'} cart={cart} setCart={setCart} />
    </>
  );
};

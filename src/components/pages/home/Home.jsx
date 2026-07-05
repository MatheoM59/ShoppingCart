import { Header } from '../../header/Header';
import { Category } from './Category';
import { Recommandations } from './Recommandations';
import category from '../../../data/categories.json';
export const Home = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <>
      <Header cart={cart} />
      <Recommandations where={'home'} cart={cart} setCart={setCart} />
      <Category categorys={category} />
    </>
  );
};

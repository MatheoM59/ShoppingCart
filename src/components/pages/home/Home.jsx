import { Header } from '../../header/Header';
import { Category } from './Category';
import { Recommandations } from './Recommandations';
import category from '../../../data/categories.json';
export const Home = () => {
  return (
    <>
      <Header categorys={category} />
      <Recommandations />
      <Category categorys={category} />
    </>
  );
};

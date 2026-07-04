import { Header } from '../../header/Header';
import { Items } from './Items';
import products from '../../../data/products.json';
import { useParams } from 'react-router';
import { useState } from 'react';
import styles from './styles/shop.module.css';

export const Shop = ({ categorys }) => {
  const { categoryId } = useParams();
  const [categorySelected, setCategorySelected] = useState(
    categoryId ? parseInt(categoryId) : undefined
  );
  const categorysList = categorys;

  const data =
    categorySelected != undefined
      ? products.filter((c) => c.categoryId === categorySelected)
      : products;
  const handleClick = () => {
    setCategorySelected(2);
  };
  return (
    <>
      <Header />
      <button onClick={handleClick}>Click</button>
      <select
        value={categorySelected}
        onChange={(e) => setCategorySelected(e.target.value)}
      >
        {categorysList.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
        <option value={undefined}>All</option>
      </select>

      <Items type={'shop'} data={data} />
    </>
  );
};

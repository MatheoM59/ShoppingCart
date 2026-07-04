import App from './App.jsx';
import { Cart } from './components/pages/cart/Cart.jsx';
import { Shop } from './components/pages/shop/Shop.jsx';
import category from './data/categories.json';

export const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'shop/:categoryId',
    element: <Shop />,
  },
  {
    path: 'shop',
    element: <Shop categorys={category} />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
];

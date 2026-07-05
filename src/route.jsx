import { Home } from './components/pages/home/Home.jsx';
import { Cart } from './components/pages/cart/Cart.jsx';
import { ProductCard } from './components/pages/productCard/ProductCard.jsx';
import { Shop } from './components/pages/shop/Shop.jsx';
import category from './data/categories.json';

export function createRoutes(cart, setCart) {
  return [
    {
      path: '/',
      element: <Home cart={cart} setCart={setCart} />,
    },
    {
      path: 'shop/:categoryId',
      element: <Shop categorys={category} cart={cart} />,
    },
    {
      path: 'shop',
      element: <Shop categorys={category} cart={cart} />,
    },
    {
      path: 'productCard/:productId',
      element: <ProductCard cart={cart} setCart={setCart} />,
    },
    {
      path: 'cart',
      element: <Cart cart={cart} setCart={setCart} />,
    },
  ];
}

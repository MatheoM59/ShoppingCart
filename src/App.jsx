import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoutes } from './route.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter(createRoutes(cart, setCart), {
    basename: '/ShoppingCart/',
  });

  return <RouterProvider router={router} />;
}

export default App;

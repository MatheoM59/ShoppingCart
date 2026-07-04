import { X } from 'lucide-react';

export const ProductCard = ({ DisplayedProduct, data }) => {
  const product = data.find((p) => p.id === DisplayedProduct);
  console.log(product);
  return (
    <div>
      <div>
        <X />
      </div>
      <div>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <h2>{product.name}</h2>
        </div>
      </div>
    </div>
  );
};

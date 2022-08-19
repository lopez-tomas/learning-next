import { useState, useEffect } from 'react'
import ProductItem from './ProductItem';

const ProductsList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/products')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProducts(data);
      });
  }, []);

  return (
    <ul className="ProductsList">
      {products.map(product => (
        <ProductItem key={product.id} data={product} />
      ))}
    </ul>
  )
}

export default ProductsList

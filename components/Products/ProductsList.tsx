import { useState, useEffect } from 'react'
import Link from 'next/link';

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
        <li key={product.id}>
          <Link href={`/products/${encodeURIComponent(product.id)}`}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductsList

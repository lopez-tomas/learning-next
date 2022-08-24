import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductItem from '@/components/Products/ProductItem';

const Product = () => {
  const [product, setProduct] = useState<TProduct>();

  const {
    query: { productId }
  } = useRouter();

  useEffect(() => {
    window.fetch(`/api/products/${productId}`)
      .then(response =>
        response.json()
      )
      .then(data =>
        setProduct(data)
      )
      .catch(error => {
        console.error(error)
      });
  }, [productId]);

  if (!product) {
    return null;
  }

  return (
    <div className='Product'>
      Product with ID: {productId}
      <ProductItem data={product} />
    </div>
  )
}

export default Product;

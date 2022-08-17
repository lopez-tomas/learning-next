import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { productId }
  } = useRouter();

  return (
    <div>
      Product with ID: {productId}
    </div>
  )
}

export default ProductItem;

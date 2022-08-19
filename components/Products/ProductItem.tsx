// import React from 'react'

type Props = {
  key: TProductId;
  data: TProduct;
}

const ProductItem = ({ data }: Props) => {
  return (
    <li className="ProductItem">
      {data.name}
    </li>
  )
}

export default ProductItem;

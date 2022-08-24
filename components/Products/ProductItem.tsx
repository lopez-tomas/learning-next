//import React from 'react'

type Props = {
  data: TProduct;
}

const ProductItem = ({ data }: Props) => {
  return (
    <div className="ProductItem">
      <img src={data.image} />
      <h2>{data.name}</h2>
      <p>{data.price}</p>
      <p>sku: {data.sku}</p>
      <p>{data.attributes['description']}</p>
      <p>Hardiness: {data.attributes['hardiness']}</p>
      <p>Shape: {data.attributes['shape']}</p>
      <p>Taste: {data.attributes['taste']}</p>
    </div>
  )
}

export default ProductItem;

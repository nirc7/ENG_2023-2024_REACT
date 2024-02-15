import React from 'react'
import Product from './Product'

export default function ProductList(props) {

  let productsStr = props.products.map(product =>
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {productsStr}
    </div>
  )
}

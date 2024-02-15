import React from 'react'
import CartItem from './CartItem'

export default function ShopingCart(props) {

  let total = 200;

  let cartItemsStr = props.cartItems.map(ci =>
    <CartItem
      key={ci.id}
      id={ci.id}
      name={ci.name}
      price={ci.price}
    />
  );

  return (
    <div style={{border:'solid black', padding:15}}>
      {cartItemsStr}
      <hr />
      Total:{total}
    </div>
  )
}

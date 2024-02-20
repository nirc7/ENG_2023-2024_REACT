import React from 'react'
import CartItem from './CartItem'

export default function ShopingCart(props) {

  let total = 0;

  let cartItemsStr = props.cartItems.map(ci => {

    total += ci.price;

    return <CartItem
      key={ci.id}
      id={ci.id}
      name={ci.name}
      price={ci.price}
      sendId2Del={props.sendId2Del}

    />
  }
  );

  return (
    <div style={{ border: 'solid black', padding: 15 }}>
      {cartItemsStr}
      <hr />
      Total: {total}
    </div>
  )
}

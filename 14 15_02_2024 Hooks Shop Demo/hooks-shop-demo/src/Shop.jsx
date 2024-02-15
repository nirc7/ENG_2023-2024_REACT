import { useState } from "react";
import ProductList from "./ProductList";
import ShopingCart from "./ShopingCart";

const productsInit = [
  { id: 1, name: 'Hat', price: 100, img: 'hat.jpg' },
  { id: 2, name: 'Pants', price: 200, img: 'pants.jpg' },
  { id: 3, name: 'TShirt', price: 150, img: 'tshirt.jpg' }
];

const cartItemsInit = [
  { id: 2, name: 'Pants', price: 200, img: 'pants.jpg' },
  { id: 3, name: 'TShirt', price: 150, img: 'tshirt.jpg' }
];

export default function Shop() {
  const [products, setProducts] = useState(productsInit);
  const [cartItems, setCartItems] = useState(cartItemsInit);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gridTemplateRows: '1fr 2fr'
    }}>
      <div><h3>Shop</h3></div> 
      <ShopingCart cartItems={cartItems} /> 
      <ProductList products={products} />
    </div>
  )
}

import { useState } from "react";
import ProductList from "./ProductList";
import ShopingCart from "./ShopingCart";

const productsInit = [
  { id: 1, name: 'Hat', price: 100, img: 'hat.jpg' },
  { id: 2, name: 'Pants', price: 200, img: 'pants.jpg' },
  { id: 3, name: 'TShirt', price: 150, img: 'tshirt.jpg' }
];

const cartItemsInit = [
  // { id: 2, name: 'Pants', price: 200, img: 'pants.jpg' },
  // { id: 3, name: 'TShirt', price: 150, img: 'tshirt.jpg' }
];

export default function Shop() {
  const [products, setProducts] = useState(productsInit);
  const [cartItems, setCartItems] = useState(cartItemsInit);

  const getId2Buy = (id) => {
    let product2BuyInd = products.findIndex(prod => prod.id === id);
    console.log(product2BuyInd);
    console.log(products[product2BuyInd]);

    let newCartItems = [...cartItems, products[product2BuyInd]];
    setCartItems(newCartItems);

    let newProduct = [...products];
    newProduct.splice(product2BuyInd, 1);
    console.log(newProduct);
    setProducts(newProduct);
    // let newProducts = products.filter(prod => prod.id !== id);
  }

  const getId2Del = (id) => {
    setProducts([...products, cartItems.find(item => item.id === id)]);
    setCartItems(prevcil => prevcil.filter(item => item.id !== id));
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gridTemplateRows: '1fr 2fr'
    }}>
      <div><h3>Shop</h3></div>
      <ShopingCart cartItems={cartItems} sendId2Del={getId2Del} />
      <ProductList products={products} sendId2Buy={getId2Buy} />
    </div>
  )
}

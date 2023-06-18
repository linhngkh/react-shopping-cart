import React from "react";

import { ProductsItemType } from "../types";
import CartCheckout from "./CartCheckout";
type Props = {
  productItems: ProductsItemType[];
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ productItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: ProductsItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div className="space-y-5 text-black">
      <h1 className="text-lg font-bold ">Your Shopping Cart</h1>
      {productItems.length === 0 ? <p>Mo items in cart.</p> : null}
      {productItems.map((item) => (
        <CartCheckout
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2 className="font-bold text-xl">
        Total: €{calculateTotal(productItems).toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;

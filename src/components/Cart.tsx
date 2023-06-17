import React from "react";

import { ProductsItemType } from "../types";
import CartItem from "./CartItem";

type Props = {
  productItems: ProductsItemType[];
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ productItems, addToCart, removeFromCart }) => {
  return (
    <div className="">
      <h2 className="text-lg font-bold">Your Shopping Cart</h2>
      {productItems.length === 0 ? <p>Mo items in cart.</p> : null}
      {productItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;

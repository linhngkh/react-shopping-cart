import React from "react";

import { ProductsItemType } from "../types";

type Props = {
  productItems: ProductsItemType[];
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ productItems, addToCart, removeFromCart }) => {
  return (
    <aside className="w-10 p-4">
      <h2>Your Shopping Cart</h2>
      {productItems.length === 0 ? <p>Mo items in cart.</p> : null}
      {productItems.map((item) => (
        <CartItem />
      ))}
    </aside>
  );
};

export default Cart;

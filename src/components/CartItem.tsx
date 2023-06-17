import React from "react";
import { ProductsItemType } from "../types";

type Props = {
  item: ProductsItemType;
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <div className="">
        <p>Price: €{item.price}</p>
        <p>Total: €{(item.amount * item.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;

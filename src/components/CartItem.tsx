import React from "react";
import { ProductsItemType } from "../types";

type Props = {
  item: ProductsItemType;
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, removeFromCart, addToCart }) => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-lg text-black">{item.title}</h3>
      <div className="flex justify-between">
        <p className="font-bold text-sm">Price: €{item.price}</p>
        <p className="font-bold text-sm">
          Total: €{(item.amount * item.price).toFixed(2)}
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <button
          className="px-2 py-1 bg-slate-300 text-white rounded-md"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>
        <p className="font-bold">{item.amount}</p>
        <button
          className="px-2 py-1 bg-slate-300 text-white rounded-md"
          onClick={() => addToCart(item)}
        >
          +
        </button>
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;

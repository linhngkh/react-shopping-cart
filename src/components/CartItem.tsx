import React from "react";
import { ProductsItemType } from "../types";

type Props = {
  item: ProductsItemType;
  addToCart: (clickedItem: ProductsItemType) => void;
  removeFromCart: (id: number) => void;
};
//styles
const buttonStyles = `px-6 py-2 bg-slate-300 text-black font-bold rounded-md`;

const CartItem: React.FC<Props> = ({ item, removeFromCart, addToCart }) => {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg text-black">{item.title}</h3>
      <div className="flex justify-between">
        <p className="font-bold text-sm">Price: €{item.price}</p>
        <p className="font-bold text-sm">
          Total: €{(item.amount * item.price).toFixed(2)}
        </p>
      </div>

      <div className="flex-between">
        <button
          className={`${buttonStyles}`}
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>
        <p className="font-bold">{item.amount}</p>
        <button className={`${buttonStyles}`} onClick={() => addToCart(item)}>
          +
        </button>

        <img
          src={item.image}
          alt={item.title}
          className="max-w-[100px] object-cover"
        />
      </div>
      <div className="bg-gray-200 h-0.5"></div>
    </section>
  );
};

export default CartItem;

import React from "react";
import { DrawerProps } from "../types";
import Cart from "./Cart";

type Props = {
  children: React.ReactNode;
};

type CombinedProps = DrawerProps & Props;

const Drawer = ({ setCartOpen, cartOpen, children }: CombinedProps) => {
  return (
    <div
      className="w-40 h-full flex justify-end bg-black"
      onClick={() => setCartOpen(false)}
    >
      {children}
    </div>
  );
};

export default Drawer;

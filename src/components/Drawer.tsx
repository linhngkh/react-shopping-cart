import React from "react";
import { DrawerProps } from "../types";
import Cart from "./Cart";

type Props = {
  children: React.ReactNode;
};

type CombinedProps = DrawerProps & Props;

const Drawer: React.FC<CombinedProps> = ({
  setCartOpen,
  cartOpen,
  children,
}) => {
  return (
    <div
      className="w-80 h-screen flex justify-end  bg-black"
      onClick={() => setCartOpen(false)}
    >
      {children}
    </div>
  );
};

export default Drawer;

import React from "react";
import { DrawerProps } from "../types";
import { IoMdCloseCircleOutline } from "react-icons/io";

type Props = {
  children: React.ReactNode;
};

type CombinedProps = DrawerProps & Props;

const Drawer: React.FC<CombinedProps> = ({ setCartOpen, children }) => {
  return (
    <div className="absolute inset-y-0 right-0 w-[500px] bg-white p-4 shadow">
      <button onClick={() => setCartOpen(false)}>
        <IoMdCloseCircleOutline className="w-6 h-6" />
      </button>
      {children}
    </div>
  );
};

export default Drawer;

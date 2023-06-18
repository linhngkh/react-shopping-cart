import { ProductsItemType } from "../types";
import { BsCart4 } from "react-icons/bs";

type Props = {
  cartItem: ProductsItemType[];
  getTotalItems: (items: ProductsItemType[]) => number;
  setCartOpen: (cartOpen: boolean) => void;
};

const Navbar: React.FC<Props> = ({ getTotalItems, cartItem, setCartOpen }) => {
  return (
    <div className="flex justify-between px-10 py-5">
      <div className="">
        <a className="text-xl font-extrabold" href="/">
          Shoppi&Style
        </a>
      </div>

      <div className="relative">
        <button onClick={() => setCartOpen(true)}>
          {" "}
          <BsCart4 className="w-10 h-10" />
        </button>

        <span className="absolute top-5 -right-4 inline-flex items-center justify-center w-7 h-7 bg-red-500 text-white text-xs font-bold rounded-full">
          {getTotalItems(cartItem)}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

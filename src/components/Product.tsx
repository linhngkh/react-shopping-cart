import { Props } from "../types";
import { useState } from "react";
const Product: React.FC<Props> = ({ item, handleAddToCart }) => {
  //STATE
  const [showFull, setShowFull] = useState(false);
  //DESTRUCTURING
  const { image, title, description, price } = item;

  const toggleDescription = () => {
    setShowFull(!showFull);
  };

  const truncatedText = showFull
    ? description
    : description.slice(0, 200) + "...";

  return (
    <section className="product-card ">
      <div className="flex-center max-w-md overflow-hidden bg-cover bg-no-repeat ">
        <img
          src={image}
          alt={title}
          className=" w-full h-40 my-3 object-contain transition duration-300 ease-in-out hover:scale-110 "
        />
      </div>

      <div className="pt-4 flex items-start justify-between flex-col space-y-2">
        <div>
          <h2 className="font-bold text-lg ">{title}</h2>
        </div>

        <div className="max-w-xs">
          <p className="text-xs  text-gray-800  break-all leading-tight">
            {truncatedText}
          </p>
          <button
            className="text-blue-500 hover:underline text-sm"
            onClick={toggleDescription}
          >
            {showFull ? "Show less" : "Show more"}
          </button>
        </div>

        <div>
          <h3 className="font-extrabold text-[32px] leading-[38px] mt-3">
            ${price}
          </h3>
        </div>

      

        <div className="flex-center">
          <button
            className="bg-slate-200 px-5 py-2 rounded-lg"
            onClick={() => handleAddToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;

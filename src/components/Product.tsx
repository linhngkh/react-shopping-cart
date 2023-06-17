import { Props } from "../types";

const Product: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;
  return (
    <div className="">
      <div className="w-full h-[950px] bg-white shadow-xl  border-2 mt-5 rounded-xl p-4">
        <div className="flex items-center justify-center">
          <img src={image} alt={title} className="max-w-[250px] object-cover" />
        </div>

        <div className="pt-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <div className="max-w-xs">
            <p className="text-xs text-gray-800 leading-snug overflow-hidden whitespace-normal">
              {description}
            </p>
          </div>

          <h3 className="font-bold">${price}</h3>
          <div className="flex justify-around">
            <div className="border-2 text-sm border-gray-300 rounded-xl w-20 text-center">
              Fashion
            </div>
            <div className="border-2 text-sm border-gray-300 rounded-xl w-20 text-center">
              Products
            </div>
          </div>
          <div className="flex flex-col items-center pt-5">
            <button
              className="bg-slate-200 px-5 py-2"
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

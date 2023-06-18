import { Props } from "../types";

const Product: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;
  return (
    <div className="flex relative flex-col min-w-[250px] w-full h-[750px] bg-white shadow-xl  border-2 mt-5 rounded-xl p-4">
      <div className="flex items-center justify-center relative max-w-md overflow-hidden bg-cover bg-no-repeat ">
        <img
          src={image}
          alt={title}
          className="max-w-[250px] object-cover transition duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <article className="pt-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="max-w-xs">
          <p className="text-xs text-gray-800  break-all">{description}</p>
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
      </article>
    </div>
  );
};

export default Product;

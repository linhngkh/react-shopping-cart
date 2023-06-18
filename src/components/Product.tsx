import { Props } from "../types";

const Product: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;
  return (
    <section className="flex-column min-w-[250px] w-full h-[750px] bg-white shadow-xl  border-2 mt-5 rounded-xl p-6">
      <div className="flex-center  max-w-md overflow-hidden bg-cover bg-no-repeat ">
        <img
          src={image}
          alt={title}
          className="max-w-[250px] object-cover transition duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="pt-4 flex justify-between flex-col space-y-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="max-w-xs">
          <p className="text-xs  text-gray-800  break-all leading-tight">
            {description}
          </p>
        </div>

        <h3 className="font-bold mt-3">${price}</h3>
        <div className="flex justify-around">
          <div className="border-2 text-sm border-gray-300 rounded-xl w-20 text-center">
            Fashion
          </div>
          <div className="border-2 text-sm border-gray-300 rounded-xl w-20 text-center">
            Products
          </div>
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

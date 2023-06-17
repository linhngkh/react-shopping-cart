import { Props } from "../types";

const Product: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;
  return (
    <div className="flex flex-row justify-between">
      <div className="  w-96 bg-white shadow-xl  border-2 mt-5">
        <figure>
          <img src={image} alt={title} className="object-contain" />
        </figure>
        <div className="card-body  card-compact">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-xs text-gray-800">{description}</p>
          <h3 className="font-bold">${price}</h3>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <button className="btn" onClick={() => handleAddToCart(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

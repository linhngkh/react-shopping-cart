import { ProductsItemType , Props} from "../types"



const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
    const { image, title, description,price } = product
  return (
      <div>
          <img src={image} alt={title} />
          <div>
              <h3>{ title}</h3>
              <p>{description}</p>
              <h3>${ price}</h3>
          </div>
          <button className="btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default Product
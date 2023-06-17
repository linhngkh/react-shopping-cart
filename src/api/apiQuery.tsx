import axios from "axios"
import { ProductsItemType } from "../types"
const baseURL = "https://fakestoreapi.com/products"

export const getProducts = async (): Promise<ProductsItemType[]> => {
    const response = await axios.get(baseURL)
   
  return response.data;
  
}


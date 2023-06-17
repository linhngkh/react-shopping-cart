
import { useState } from "react";
import { useQuery } from "react-query";

//components
import {BsCart4} from "react-icons/bs"
import { ProductsItemType } from "./types";
import { getProducts } from "./api/apiQuery";
import Product from "./components/Product";



function App() {
  const { data, isLoading, error } = useQuery<ProductsItemType[]>(
   { queryKey: ["products"],
    queryFn: getProducts,}
  );
  
if(isLoading) return <div className="flex justify-center items-center mx-auto h-screen"><span className="loading loading-bars loading-lg"></span></div>

  if(error) return (<div className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Something went wrong.</span>
</div>)
  
  const getTotalItems = () => null
  const handleAddToCart = (clickedItem: ProductsItemType) => null
  const handleRemoveFromCart = () => null

  
  
  return <>
    {data.map((product) => (
      <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
    ))} 
  </>;
}

export default App;

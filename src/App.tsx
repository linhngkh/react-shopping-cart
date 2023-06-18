import { useState } from "react";
import { useQuery } from "react-query";

//components

import { ProductsItemType } from "./types";
import { getProducts } from "./api/apiQuery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItem, setCartItem] = useState([] as ProductsItemType[]);

  const { data, isLoading, error } = useQuery<ProductsItemType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="flex-center mx-auto h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Something went wrong.</span>
      </div>
    );

  const getTotalItems = (items: ProductsItemType[]) =>
    items.reduce((ack: number, items) => ack + items.amount, 0);

  const handleAddToCart = (clickedItem: ProductsItemType) => {
    setCartItem((prev) => {
      //check if the item is already added into the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // first time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItem((prev) =>
      //ack as an empty array, and specify it as ProductsItemType
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          //return new array
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductsItemType[])
    );
  };

  return (
    <main className="px-20">
      <Navbar
        cartItem={cartItem}
        getTotalItems={getTotalItems}
        setCartOpen={setCartOpen}
      />
      {cartOpen && (
        <Drawer cartOpen={cartOpen} setCartOpen={setCartOpen}>
          <Cart
            productItems={cartItem}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
      )}

      <section className="grid-card">
        {data?.map((product) => (
          <ProductCard
            item={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default App;

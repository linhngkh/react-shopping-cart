export type ProductsItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
  rating: {
    count: number;
    rate: number;
  };
};

export type Props = {
  product: ProductsItemType;
  handleAddToCart: (clickedItem: ProductsItemType) => void;
};

export type DrawerProps = {
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
};

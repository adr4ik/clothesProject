export interface IProduct {
  id: string;
  name: string;
  price: number;
  old_price: number;
  material_color: string;
  sizes: string[];
  count: string;
  articul: string;
  category: string;
}

export interface IBlog {
  id: string;
  image: string | [];
  date: string;
  name: string;
}

export interface CartProduct {
  product: IProduct;
  count: number;
  subPrice: number;
}

export interface Cart {
  products: CartProduct[];
  totalPrice: number;
}

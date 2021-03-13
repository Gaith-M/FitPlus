export interface ProductInterface {
  id: string;
  title: string;
  price: number;
  qty: number;
  imgSrc: string;
}
export default interface CartInterface {
  items: ProductInterface[];
  points: number;
  shipping: { type: 'standard' | 'express'; value: number };
}

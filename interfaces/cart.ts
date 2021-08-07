export interface itemInCartInterface {
  item: {
    id: string;
    name: string;
    color: string;
    flavor: string;
    size: string;
    price: number;
  };
  quantity: number;
}

export interface updateQuantityPayloadInterface {
  id: string;
  color: string;
  size: string;
  flavor: string;
  quantity: number;
}

export default interface CartInterface {
  items: itemInCartInterface[];
  points: number;
  shipping: { type: 'standard' | 'express'; value: number };
}

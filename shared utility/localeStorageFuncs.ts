import { itemInCartInterface } from '../interfaces/cart';

export const setCartInLocalStorage = (cart: itemInCartInterface[] | []) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const emptyCartFromLocalStorage = () =>
  localStorage.setItem('cart', '[]');

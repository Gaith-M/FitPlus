import { RootState } from '../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartState, {
  itemInCartInterface,
  updateQuantityPayloadInterface,
} from '../../../interfaces/cart';

const initialState: CartState = {
  items: [
    {
      item: {
        name: 'Nike belt for weight lifting',
        id: '35f78f0b-8938-412d-aae0-80937ee4a744',
        color: 'Black',
        flavor: null,
        size: 'M',
        price: 17.5,
      },
      quantity: 2,
    },
    {
      item: {
        name: 'Nike Women Sportswear shirt',
        id: '21525631-2d64-48b7-b8a8-b7f7325bd5f1',
        color: 'Fireberry',
        flavor: null,
        size: 'S',
        price: 21.2,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'Nike Women Sportswear shirt',
        id: '21525631-2d64-48b7-b8a8-b7f7325bd5f1',
        color: 'Hesta Gray',
        flavor: null,
        size: 'S',
        price: 21.2,
      },
      quantity: 1,
    },
    {
      item: {
        name: 'Nitro Tech Performance',
        id: '826ed67f-2d85-4afc-99b1-33ea42bc1720',
        color: null,
        flavor: 'chocolate',
        size: null,
        price: 899.99,
      },
      quantity: 1,
    },
  ],
  points: 0,
  shipping: { type: 'standard', value: 0 },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart({ items }, action: PayloadAction<itemInCartInterface>) {
      const { payload } = action;
      let index = items.findIndex(({ item }) => item.id === payload.item.id);
      if (index < 0) {
        items.push(action.payload);
      } else {
        let item = items[index].item;
        if (
          item.color === payload.item.color &&
          item.flavor === payload.item.flavor &&
          item.size === payload.item.size
        ) {
          items[index].quantity += payload.quantity;
        } else {
          items.push(action.payload);
        }
      }
    },
    removeFromCart({ items }, action: PayloadAction<string>) {
      let index = items.findIndex(({ item }) => item.id === action.payload);
      if (index >= 0) items.splice(index, 1);
    },
    emptyCart(state) {
      state.items = [];
    },
    updateQty(
      state,
      { payload }: PayloadAction<updateQuantityPayloadInterface>
    ) {
      const index = state.items.findIndex(
        ({ item }) =>
          item.id === payload.id &&
          item.color === payload.color &&
          item.size === payload.size &&
          item.flavor === payload.flavor
      );
      if (index >= 0) state.items[index].quantity = payload.quantity;
    },
    setShipping(state, action: PayloadAction<string>) {
      console.log('shipping set', action);
    },
  },
});

export const { addToCart, removeFromCart, updateQty, setShipping, emptyCart } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;

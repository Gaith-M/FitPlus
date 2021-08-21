import { RootState } from '../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartState, {
  itemInCartInterface,
  updateQuantityPayloadInterface,
} from '../../../interfaces/cart';

const initialState: CartState = {
  items: [],
  points: 0,
  shipping: { type: 'standard', value: 0 },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart(state, { payload }: PayloadAction<itemInCartInterface[]>) {
      state.items = payload;
    },
    addToCart({ items }, action: PayloadAction<itemInCartInterface>) {
      const { payload } = action;
      let index = items.findIndex(
        (i) =>
          i.item.id === payload.item.id &&
          i.item.color === payload.item.color &&
          i.item.flavor === payload.item.flavor &&
          i.item.size === payload.item.size
      );
      if (index <= -1) {
        items.push(action.payload);
      } else {
        items[index].quantity += payload.quantity;
      }
    },
    removeFromCart({ items }, action: PayloadAction<string>) {
      let index = items.findIndex(({ item }) => item.id === action.payload);
      if (index >= 0) items.splice(index, 1);
    },
    loadCart(state, { payload }: PayloadAction<itemInCartInterface[]>) {
      state.items = payload;
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

export const {
  addToCart,
  removeFromCart,
  updateQty,
  setShipping,
  emptyCart,
  loadCart,
  updateCart,
} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;

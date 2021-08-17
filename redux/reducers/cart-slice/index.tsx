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

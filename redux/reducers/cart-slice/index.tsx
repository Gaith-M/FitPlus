import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import CartState, { ProductInterface } from './cart-interface';

const initialState: CartState = {
  items: [],
  points: 0,
  shipping: { type: 'standard', value: 0 },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart({ items }, action: PayloadAction<ProductInterface>) {
      const { payload } = action;
      let index = items.findIndex(({ id }) => id === payload.id);
      if (index < 0) {
        items.push(action.payload);
      } else {
        items[index].qty += payload.qty;
      }
    },
    removeFromCart({ items }, action: PayloadAction<string>) {
      let index = items.findIndex(({ id }) => id === action.payload);
      if (index >= 0) items.splice(index, 1);
    },
    updateQty(
      { items },
      { payload }: PayloadAction<{ id: string; qty: number }>
    ) {
      const index = items.findIndex(({ id }) => id === payload.id);
      if (index >= 0) items[index].qty = payload.qty;
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
} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;

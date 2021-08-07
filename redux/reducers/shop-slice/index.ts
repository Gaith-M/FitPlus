import { createSlice } from '@reduxjs/toolkit';
import { itemInterface } from '../../../interfaces/products';

interface initStateInterface {
  isLoading: boolean;
  products: itemInterface[] | [];
  similiarProducts: {
    name: string;
    slug: string;
    images: { alt: string; image: {} }[];
    id: string;
  }[];
}

const initialState: initStateInterface = {
  isLoading: false,
  products: [],
  similiarProducts: [],
};

const shopSlice = createSlice({
  name: 'shop-slice',
  initialState,
  reducers: {
    setProductLoadingState(state, { payload }) {
      state.isLoading = payload;
    },
    addProducts(state, { payload }) {
      state.products = payload;
    },
    setSimiliarProducts(state, { payload }) {
      state.similiarProducts = payload;
    },
  },
});

export default shopSlice.reducer;
export const { addProducts, setProductLoadingState, setSimiliarProducts } =
  shopSlice.actions;

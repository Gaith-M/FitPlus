import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-slice';
import isMobileReducer from './reducers/isMobile-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    isMobile: isMobileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

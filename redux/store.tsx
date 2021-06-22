import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-slice';
import isMobileReducer from './reducers/isMobile-slice';
import themeReducer from './reducers/theme-slice';
import blogsReducer from './reducers/blogs-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    isMobile: isMobileReducer,
    theme: themeReducer,
    blogs: blogsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

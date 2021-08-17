import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-slice';
import isMobileReducer from './reducers/isMobile-slice';
import themeReducer from './reducers/theme-slice';
import blogsReducer from './reducers/blogs-slice';
import shopReducer from './reducers/shop-slice';
import userReducer from './reducers/user-slice';
import langReducer from './reducers/lang-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    isMobile: isMobileReducer,
    theme: themeReducer,
    blogs: blogsReducer,
    shop: shopReducer,
    user: userReducer,
    langState: langReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

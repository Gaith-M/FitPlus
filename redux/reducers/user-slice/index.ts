import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateUserInterface, userInterface } from '../../../interfaces/user';

interface stateInterface {
  user: userInterface | null;
  wishlist: string[];
  favoriteBlogs: string[];
  isLoading: boolean;
}

const initialState: stateInterface = {
  user: {
    username: 'farlight',
    firstName: 'gaith',
    lastName: 'jade',
    email: 'gaith@gmail.com',
    phone: '123123',
    address: 'aaaaa',
  },
  wishlist: [],
  favoriteBlogs: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user-slice',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setUser(state, { payload }: PayloadAction<userInterface>) {
      state.user = payload;
    },
    removeUser(state) {
      state.user = null;
    },
    updateUser(
      { user },
      {
        payload: { firstName, lastName, phone, address, email },
      }: PayloadAction<updateUserInterface>
    ) {
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      if (email) {
        user.email = email;
      }
      if (address) {
        user.address = address;
      }
      if (phone) {
        user.phone = phone;
      }
    },
    addBlogToFavorite(state, { payload }: PayloadAction<string>) {
      let index = state.favoriteBlogs.findIndex((id) => id === payload);
      if (index < 0) {
        state.favoriteBlogs.push(payload);
      }
    },
    removeBlogFromFavorite(state, { payload }: PayloadAction<string>) {
      state.favoriteBlogs = state.favoriteBlogs.filter((id) => id !== payload);
    },

    addItemToWishlist(state, { payload }: PayloadAction<string>) {
      let index = state.wishlist.findIndex((id) => id === payload);
      if (index < 0) {
        state.wishlist.push(payload);
      }
    },
    removeItemFromWishlist(state, { payload }: PayloadAction<string>) {
      state.wishlist = state.wishlist.filter((id) => id !== payload);
    },
  },
});

export const {
  setLoading,
  setUser,
  removeUser,
  updateUser,
  addItemToWishlist,
  removeItemFromWishlist,
  addBlogToFavorite,
  removeBlogFromFavorite,
} = userSlice.actions;
export default userSlice.reducer;

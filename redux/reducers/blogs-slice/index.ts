import { createSlice } from '@reduxjs/toolkit';

interface BlogInterface {
  author: { localeName: string; name: string; slug: string };
  category: string;
  preview: string;
  dateOfPublish: string;
  image: { alt: string; asset: {} };
  slug: string;
  title: string;
}

const initialState: BlogInterface[] | [] = [];

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    storeBlogs: (state, { payload }) => (state = payload),
  },
});

export default blogsSlice.reducer;
export const { storeBlogs } = blogsSlice.actions;

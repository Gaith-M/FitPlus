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

const initialState: {
  blogs: BlogInterface[] | [];
  isLoading: boolean;
} = {
  blogs: [],
  isLoading: false,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    storeBlogs(state, { payload }) {
      state.blogs = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export default blogsSlice.reducer;
export const { storeBlogs, setLoading } = blogsSlice.actions;

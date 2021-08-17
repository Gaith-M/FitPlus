import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initStateInterface {
  isLoading: boolean;
}

const initialState: initStateInterface = {
  isLoading: false,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLoadingState(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const { setLoadingState } = langSlice.actions;
export default langSlice.reducer;

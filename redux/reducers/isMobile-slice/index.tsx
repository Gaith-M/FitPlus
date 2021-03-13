import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const isMobile = createSlice({
  name: 'isMobile',
  initialState: { smallScreen: false },
  reducers: {
    detectMobile(state, { payload }: PayloadAction<boolean>) {
      state.smallScreen = payload;
    },
  },
});

export const { detectMobile } = isMobile.actions;
export const isMobileSelector = (state: RootState) =>
  state.isMobile.smallScreen;
export default isMobile.reducer;

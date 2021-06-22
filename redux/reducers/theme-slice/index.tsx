import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// true = light theme
// false = dark theme
const themeSlice = createSlice({
  name: 'theme',
  initialState: true,
  reducers: {
    toggleTheme(state, action: PayloadAction<boolean>) {
      return (state = action.payload);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => {
  return state.theme;
};
export default themeSlice.reducer;

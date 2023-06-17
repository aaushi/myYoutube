import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "AppSlice",
  initialState: {
    isMenuOpen: "FullOpen",
  },
  reducers: {
    toggleMenu: (state) => {
      if (state.isMenuOpen == "FullOpen") state.isMenuOpen = "PartialOpen";
      else if (state.isMenuOpen == "PartialOpen") state.isMenuOpen = "FullOpen";
      else if (state.isMenuOpen == "CloseMenu") state.isMenuOpen = "FullOpen";
    },
    closeMenu: (state) => {
      state.isMenuOpen = "CloseMenu";
    },
  },
});

export const { toggleMenu, closeMenu } = AppSlice.actions;
export default AppSlice.reducer;

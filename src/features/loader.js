import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaderValue : false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.loaderValue = !state.loaderValue;
    },
  },
});

export const { toggleLoader} = loaderSlice.actions

export default loaderSlice.reducer
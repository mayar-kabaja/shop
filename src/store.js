import { productsSlice } from './components';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

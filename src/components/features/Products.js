import axios from 'axios';

/* eslint-disable no-param-reassign */
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getProducts = createAsyncThunk('products/getProducts', async (name, thunkAPI) => {
  try {
    const resp = await axios.get('https://api.escuelajs.co/api/v1/products');
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filterProducts: [],
    filters: {},
    loading: false,
  },

  reducers: {
    filterProducts: (state, action) => {
      console.log(action.payload);
      const { category: filterCategory, price: filterPrice, word = '' } = action.payload;
      return {
        ...state,
        filters: { category: filterCategory, price: filterPrice, word },
        filterProducts:
          filterCategory === 'all'
            ? ([...state.products].filter(
              ({ price, title }) => price >= filterPrice[0] && price <= filterPrice[1]
              && title.toLowerCase().includes(word.toLowerCase())
              ,
            ))
            : ([...state.products].filter(
              ({ price, category, title }) => price >= filterPrice[0]
                  && price <= filterPrice[1]
                  && category.name === filterCategory && title.includes(word),
            )),
      };
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.filterProducts = action.payload.filter(
        ({ price }) => price >= 20 && price <= 600,
      );
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default productsSlice;
export const { filterProducts } = productsSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[];
  status: 'fulfilled' | 'loading' | 'rejected';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: 'loading',
  error: null,
};

export const fetchProductData = createAsyncThunk<Product[], void>(
  'product/fetchProductData',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productSlice.reducer;

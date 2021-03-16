import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("product", async () => {
  const response = await fetch("http://localhost:4000/product");
  return await response.json();
});

export const addProduct = createAsyncThunk("addProduct", async (data) => {
  const response = await fetch('http://localhost:4000/product', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: { },
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...action.payload.data];
    },
    [fetchProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [addProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { userAdded } = productSlice.actions;

export default productSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";

export const fetchPizza = createAsyncThunk<FetchedPizza[], string>(
  "pizza/fetch",
  async (url: string) => {
    const { data } = await axios.get(url);
    return data as FetchedPizza[];
  },
);

export interface FetchedPizza {
    title: string,
    price: number,
    imgUrl: string,
    sizes: number[],
    types: number[],
}

interface InitialPizza {
    items: FetchedPizza[],
    status: "loading" | "error" | "success",
}

const initialState: InitialPizza = {
  items: [],
  status: "loading",
};


export const pizzasSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;

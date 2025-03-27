import { createSlice } from "@reduxjs/toolkit";

export interface SortValue {
    name: string;
    type: string;
    order: string
}
interface Initial {
    categoryValue: number;
    sortValue: SortValue;
    searchValue: string;
    currentPage: number
}

const initialState: Initial = {
  categoryValue: 0,
  sortValue: {
    name: "популярности",
    type: "rating",
    order: "desc",
  },
  searchValue: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    category: (state, action) => {
      state.categoryValue = action.payload;
    },
    sort: (state, action) => {
      state.sortValue.name = action.payload.name;
      state.sortValue.type = action.payload.type;
      state.sortValue.order = action.payload.order;
    },
    search: (state, action) => {
      state.searchValue = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { category, sort, search, setPage } = filterSlice.actions;

export default filterSlice.reducer;

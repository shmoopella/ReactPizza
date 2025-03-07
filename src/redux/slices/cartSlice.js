import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  orderCost: 0,
  totalPizzasCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const findItem = state.value.find(
        (pizza) =>
          pizza.title === action.payload.title &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );
      findItem ? findItem.count++ : state.value.push(action.payload);
      state.totalPizzasCount++;
      state.orderCost += action.payload.price;
    },
    decrementPizza: (state, action) => {
      const findItem = state.value.find(
        (pizza) =>
          pizza.title === action.payload.title &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );
      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPizzasCount--;
        state.orderCost -= action.payload.price;
      }
    },
    deletePizza: (state, action) => {
      state.value = state.value.filter((obj) => {
        return (
          obj.title !== action.payload.title ||
          obj.type !== action.payload.type ||
          obj.size !== action.payload.size
        );
      });
      state.totalPizzasCount -= action.payload.count;
      state.orderCost -= action.payload.price * action.payload.count;
    },
    cleanCart: (state) => {
      state.value = [];
      state.orderCost = 0;
      state.totalPizzasCount = 0;
    },
  },
});

export const {
  addPizza,
  deletePizza,
  decrementPizza,
  cleanCart,
  confirmReset,
} = cartSlice.actions;
export default cartSlice.reducer;

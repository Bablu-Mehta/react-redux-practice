import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: false },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authReducer },
});

export const counterActions = counterSlice.actions;

export default store;

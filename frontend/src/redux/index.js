import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSliceReducer from "./productSlice";
import orderSlice from "./orderSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,
    order: orderSlice,
  },
});

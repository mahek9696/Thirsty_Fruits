import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  address: "",
  pincode: "",
  amount: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderRedux: (state, action) => {
      //console.log(action);
      console.log(action.payload.data);
      // state.user = action.payload.data;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.address = action.payload.data.address;
      state.pincode = action.payload.data.pincode;
      state.amount = action.payload.data.amount;
    },
  },
});

export const { orderRedux } = orderSlice.actions;

export default orderSlice.reducer;

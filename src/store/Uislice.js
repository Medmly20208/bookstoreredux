import { createSlice } from "@reduxjs/toolkit";

const showCart = createSlice({
  name: "cartdisplay",
  initialState: {
    show: false,
    notification: { shownotification: false, message: "" },
  },
  reducers: {
    showcart(state) {
      state.show = !state.show;
    },
    shownotification(state, action) {
      state.notification.shownotification = true;
      state.notification.message = action.payload.message;
      console.log(action.payload.message);
    },
    //clearNotification(state) {
    //state.notification.shownotification = false;
    //},
  },
});

export const showaction = showCart.actions;
export default showCart.reducer;

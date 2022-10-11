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

    //clearNotification(state) {
    //state.notification.shownotification = false;
    //},
  },
});

export const showaction = showCart.actions;
export default showCart.reducer;

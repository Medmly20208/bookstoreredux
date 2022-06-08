import { createSlice } from "@reduxjs/toolkit";
const cartreducer = createSlice({
  name: "cartreducer",
  initialState: { content: [] },
  reducers: {
    addtocart(state, action) {
      let j = 0;
      let amount = 1;
      if (state.content.lentgh == 0) {
        state.content.push([
          action.payload.name,
          action.payload.price,
          action.payload.description,
          amount,
        ]);
      }
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i][0] == action.payload.name) {
          state.content[i][3] = state.content[i][3] + 1;
          j = 1;
          break;
        }
      }
      if (j == 0) {
        state.content.push([
          action.payload.name,
          action.payload.price,
          action.payload.description,
          amount,
        ]);
      }
    },
    addAmount(state, action) {
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i][0] == action.payload.name) {
          state.content[i][3] = state.content[i][3] + 1;
          break;
        }
      }
    },
    decrementAmount(state, action) {
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i][0] == action.payload.name) {
          if (state.content[i][3] == 1) {
            state.content.splice(i, i + 1);
          } else {
            state.content[i][3] = state.content[i][3] - 1;
          }

          break;
        }
      }
    },
  },
});

export const Cartactions = cartreducer.actions;

export default cartreducer.reducer;

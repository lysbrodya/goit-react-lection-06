import { createSlice } from "@reduxjs/toolkit";

// export const localReducer = (state = { lang: "lt" }, action) => {
//   switch (action.type) {
//     case "local/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export const changeLang = (newLang) => {
//   return { type: "local/changeLang", payload: newLang };
// };

//////////////До пейлоад и дайтноу
// export const selectLang = (state) => state.local.lang;

// const slice = createSlice({
//   name: "local",
//   initialState: { lang: "lt" },
//   reducers: {
//     changeLang(state, action) {
//       state.lang = action.payload;
//     },
//   },
// });

// export const { changeLang } = slice.actions;
// export default slice.reducer;

const slice = createSlice({
  name: "local",
  initialState: { lang: "lt", updatedAt: Date.now() },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.value;
        state.updatedAt = action.payload.time;
      },
      prepare: (value) => {
        return {
          payload: {
            value,
            time: Date.now(),
          },
        };
      },
    },
  },
});
export default slice.reducer;
export const { changeLang } = slice.actions;
export const selectLang = (state) => state.local.lang;
export const selectUpdeted = (state) => state.local.updatedAt;

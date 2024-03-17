import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
// // import { c } from "vite/dist/node/types.d-FdqQ54oU";

// // export const balanceReducer = (state = { value: 100 }, action) => {
// //   switch (action.type) {
// //     case "balance/deposit":
// //       return {
// //         ...state,
// //         value: state.value + action.payload,
// //       };
// //     case "balance/withdraw":
// //       return {
// //         ...state,
// //         value: state.value - action.payload,
// //       };
// //     default:
// //       return state;
// //   }
// // };
// // 2) Створення екшенів Фабрики
// //          Redux
// // export const deposit = (value) => {
// //   return { type: "balance/deposit", payload: value };
// // };
// // export const withdraw = (value) => {
// //   return { type: "balance/withdraw", payload: value };
// // };
// //          redux-toolkid
// export const deposit = createAction("balance/deposit");
// // deposit = "balance/withdraw" ящо привести до стрінгу ф-ю тому в еддКейсі
// // використовуємо назву екшену а перший аргумент в екшені приводиться до рядка
// export const withdraw = createAction("balance/withdraw");
// // кріейт редюсеру не потрібен дефолт кейс
// export const balanceReducer = createReducer({ value: 100 }, (bulder) => {
//   bulder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//       //можна мутувати тому що стейт це копія на початковий стан це робить іммер
//       // return {
//       //   ...state,
//       //   value: state.value + action.payload,
//       // };
//       // якщо немутабельна операція, то треба повертати або приводити:
//       // return {
//       //   ...state,
//       //   items: state.items.filter((item) => item > 2),
//       // };
//       // abo splise abo zapysaty tudy rezultat filtru
//       // state.items = state.items.filter((item) => item > 2);
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//       // якщо параметр стану мутуємо то неможна ретьорнити (або то або то)
//       // return {
//       //   ...state,
//       //   value: state.value - action.payload,
//       // };
//     });
// });

const slice = createSlice({
  name: "balance",
  initialState: { value: 1000 },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});
export const { deposit, withdraw } = slice.actions;
export default slice.reducer;

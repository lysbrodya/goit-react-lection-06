// БАЛВАНКА
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localReducer } from "./localSlice";
// 2) ОГОЛОСИТИ ПОЧАТКОВИЙ СТАН
const initialStait = {
  balance: {
    value: 100,
  },
  local: {
    lang: "lt",
  },
};
// 3) Оголошуємо єкшн
// export const deposit = {
//   type: "balance/deposit",
//   payload: 10,
// };
// 3) міняєм єкшн на генератор екшенів(функція) фішка що можна кинути аргумент
// export const deposit = (value) => {
//   return { type: "balance/deposit", payload: value };
// };
// export const withdraw = (value) => {
//   return { type: "balance/withdraw", payload: value };
// };
// export const changeLang = (newLang) => {
//   return { type: "local/changeLang", payload: newLang };
// };
// 2) ОГОЛОСИТИ РЕДЮСЕР rootReducer >>>balanceReducer/localReducer
// const balanceReducer = (state = { value: 100 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const localReducer = (state = { lang: "lt" }, action) => {
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
const rootReducer = combineReducers({
  balance: balanceReducer,
  local: localReducer,
});
// const rootReducer = (state = initialStait, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "local/changeLang":
//       return {
//         ...state,
//         local: {
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
// 1)ОГОЛОСИТИ сТОР
export const store = createStore(rootReducer, composeWithDevTools());

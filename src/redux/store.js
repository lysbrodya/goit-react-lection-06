import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// БАЛВАНКА
// import { combineReducers, createStore } from "redux";
// // import { composeWithDevTools } from "@redux-devtools/extension";
import balanceReducer from "./balanceSlice";
import localReducer from "./localSlice";
import { configureStore } from "@reduxjs/toolkit";

const balancePersistConfig = {
  key: "balance",
  storage,
  whitelist: ["value"],
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
);
// 1)2) ОГОЛОСИТИ сТОР редакс-ТУЛКІД
// Очікує об'єкт параметрів
const localPersistConfig = {
  key: "lang",
  storage,
  whitelist: ["lang"],
};
const persistedLocalReducer = persistReducer(localPersistConfig, localReducer);

// const persistedLocalReducer = persistReducer({
//   key: "lang",
//   storage,
//   whitelist: ["lang"],
// }, localReducer);

export const store = configureStore({
  reducer: { balance: persistedBalanceReducer, local: persistedLocalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// 2) ОГОЛОСИТИ ПОЧАТКОВИЙ СТАН
// const initialStait = {
//   balance: {
//     value: 100,
//   },
//   local: {
//     lang: "lt",
//   },
// };

// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   local: localReducer,
// });

// 1)1) ОГОЛОСИТИ сТОР редакс
// ОЧікує декілька аргументів
// export const store = createStore(rootReducer, composeWithDevTools());

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

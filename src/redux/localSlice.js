export const localReducer = (state = { lang: "lt" }, action) => {
  switch (action.type) {
    case "local/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
export const changeLang = (newLang) => {
  return { type: "local/changeLang", payload: newLang };
};
export const selectLang = (state) => state.local.lang;

import { applyMiddleware, legacy_createStore as createStore } from "redux";
const initialState = { listem: [] };

const myLogger = (store) => (next) => (action) => {
  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  const result = next(action);
  console.log("[Middleware] Sonraki state:", store.getState());
  return result;
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "FAV_MOVIE":
      return { ...state, listem: [...state.listem, action.payload] };
    case "DELETE_FAV_MOVIE":
      return {
        ...state,
        listem: state.listem.filter((movie) => movie.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(myLogger));

import { legacy_createStore as createStore } from "redux";

const initialState = { listem: [] };

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

export const store = createStore(reducer);

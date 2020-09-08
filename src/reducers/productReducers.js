import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_GENRE, ORDER_PRODUCTS_BY_PRICE } from "../actions/types";

const initState = { items: [], filteredItems: [], genre: "", sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_GENRE:
      return {
        ...state,
        filteredItems: action.payload.items,
        genre: action.payload.genre,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}

import { FETCH_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      const items = action.payload;
      return {
        ...state,
        items: items,
      };
    default:
      return state;
  }
};

export default reducer;

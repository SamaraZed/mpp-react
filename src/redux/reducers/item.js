import { FETCH_ITEM_DETAIL } from "../actions/actionTypes";

const initialState = {
  item: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_DETAIL:
      const item = action.payload;
      return {
        ...state,
        item: item,
      };
    default:
      return state;
  }
};

export default reducer;

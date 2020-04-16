import {
  SET_CURRENT_USER,
  SET_PROFILE,
  RESET_PROFILE,
  EDIT_PROFILE,
} from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const user = action.payload;
      return {
        ...state,
        user: user,
      };
    case SET_PROFILE:
      const profile = action.payload;
      return {
        ...state,
        profile: profile,
      };
    case RESET_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

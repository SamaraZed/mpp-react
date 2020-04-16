import { combineReducers } from "redux";

// Reducers
import errorReducer from "./errors";
import itemsReducer from "./items";
import cartReducer from "./cart";
import userReducer from "./user";
import profile from "./profile";
const rootReducer = combineReducers({
  errors: errorReducer,
  rootItems: itemsReducer,
  cart: cartReducer,
  user: userReducer,
  profile: profile,
});
export default rootReducer;

import { combineReducers } from "redux";

// Reducers
import errorReducer from "./errors";
import itemsReducer from "./items";
import itemReducer from "./item";
import cartReducer from "./cart";
import userReducer from "./user";

const rootReducer = combineReducers({
  errors: errorReducer,
  rootItems: itemsReducer,
  rootItem: itemReducer,
  cart: cartReducer,
  user: userReducer,
});
export default rootReducer;

import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
  CHECKOUT,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  orders: [],
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      let checkItem = state.items.find((Item) => Item.id === newItem.id);
      if (checkItem) {
        checkItem.quantity += newItem.quantity;
        return {
          ...state,
          items: [...state.items],
        };
      } else {
        return {
          ...state,
          items: state.items.concat(newItem),
        };
      }

    case CHANGE_QUANTITY:
      const quantity = action.payload;
      console.log(quantity);
      return {
        ...state,
        quantity: state.quantity + quantity,
      };

    case REMOVE_FROM_CART:
      const removedItem = action.payload;
      let updatedItems = state.items.filter((Item) => Item !== removedItem);
      return {
        ...state,
        items: updatedItems,
      };

    case CHECKOUT:
      return {
        items: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

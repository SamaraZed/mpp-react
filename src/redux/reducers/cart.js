import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  FETCH_ORDERS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  order: [],
  oldOrders: [],
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      let checkItem = state.order.find((items) => items.id === newItem.id);

      if (checkItem) {
        checkItem.quantity += 1;
        return {
          ...state,
          order: [...state.order],
        };
      } else {
        return {
          ...state,
          order: [...state.order, { ...newItem, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      const removedItem = action.payload;
      let updatedItems = state.order.filter((Item) => Item !== removedItem);
      return {
        ...state,
        order: updatedItems,
      };
    case CHECKOUT:
      return {
        oldOrders: state.oldOrders.concat(action.payload),
        order: [],
      };
    case FETCH_ORDERS:
      const oldOrders = action.payload;
      return {
        ...state,
        oldOrders: oldOrders,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

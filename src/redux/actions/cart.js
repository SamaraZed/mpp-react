import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  CHANGE_QUANTITY,
} from "./actionTypes";

export const addItem = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const changeQuantity = (quantity) => ({
  type: CHANGE_QUANTITY,
  payload: quantity,
});

export const checkout = () => ({
  type: CHECKOUT,
  // payload: order,
});

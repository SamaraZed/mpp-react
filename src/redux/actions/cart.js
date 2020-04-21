import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  CHANGE_QUANTITY,
  FETCH_ORDERS,
} from "./actionTypes";
import instance from "./instance";

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

// export const checkout = (order) => ({
//   type: CHECKOUT,
//   payload: order,
// });

export const checkout = (order) => async (dispatch) => {
  try {
    const res = await instance.post("order/", order);
    console.log(res.data);
    dispatch({ type: CHECKOUT, payload: res.data });
  } catch (error) {
    console.error(error.response.data);
  }
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("order/");
    const orders = res.data;
    console.log("fetching", orders);
    dispatch({ type: FETCH_ORDERS, payload: orders });
  } catch (error) {
    console.error(error);
  }
};

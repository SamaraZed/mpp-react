import { FETCH_ITEM_DETAIL } from "./actionTypes";
import instance from "./instance";

export const fetchItemDetail = (itemID) => async (dispatch) => {
  try {
    const res = await instance.get(`items/${itemID}/`);
    const item = res.data;
    dispatch({ type: FETCH_ITEM_DETAIL, payload: item });
  } catch (error) {
    console.error(error);
  }
};

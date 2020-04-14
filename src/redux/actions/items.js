import { FETCH_ITEMS } from "./actionTypes";
import instance from "./instance";

export const fetchItems = () => async (dispatch) => {
  try {
    const res = await instance.get("clotheslist/");
    const items = res.data;
    dispatch({ type: FETCH_ITEMS, payload: items });
  } catch (error) {
    console.error(error);
  }
};

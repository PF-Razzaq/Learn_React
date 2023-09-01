import { ADD_TO_CART } from "../constants";
export const addToCart = (data) => {
  // console.warn("action", data);
  return {
    data: data,
    type: ADD_TO_CART,
  };
};

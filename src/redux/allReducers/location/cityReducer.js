import { SET_CITY } from "../../constant";

const cityData = [];
export const cityReducer = (state = cityData, action) => {
  switch (action.type) {
    case SET_CITY:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

import { SET_COUNTRY } from "../../constant";

const countryData = [];
export const countryReducer = (state = countryData, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

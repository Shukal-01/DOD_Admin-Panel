import { SET_SPECIALIZATIONS } from "../constant";

const specializationData = [];
export const specializationReducer = (state = specializationData, action) => {
  switch (action.type) {
    case SET_SPECIALIZATIONS:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

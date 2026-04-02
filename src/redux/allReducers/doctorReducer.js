import { SET_DOCTORS } from "../constant";

const doctorData = [];
export const doctorReducer = (state = doctorData, action) => {
  switch (action.type) {
    case SET_DOCTORS:
      if (action.data && Array.isArray(action.data.data)) {
        if (action.data) {
          return action.data.data;
        }
        return state;
      } else {
        return state;
      }
    default:
      return state;
  }
};

import { SET_DOCTORREGISTRATION } from "../constant";

const doctorRegistrationRequests = [];
export const doctorRegistrationReducer = (
  state = doctorRegistrationRequests,
  action
) => {
  switch (action.type) {
    case SET_DOCTORREGISTRATION:
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

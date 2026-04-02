import { SET_WEBDOCTORREGISTRATION } from "../constant";

const webDoctorRegistrationRequests = [];
export const webDoctorRegistrationReducer = (
  state = webDoctorRegistrationRequests,
  action
) => {
  switch (action.type) {
    case SET_WEBDOCTORREGISTRATION:
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

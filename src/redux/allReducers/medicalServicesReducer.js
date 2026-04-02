import { SET_MEDICALSERVICES } from "../constant";

const medicalServicesData = [];
export const medicalServicesReducer = (state = medicalServicesData, action) => {
  switch (action.type) {
    case SET_MEDICALSERVICES:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

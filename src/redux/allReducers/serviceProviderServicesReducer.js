import { SET_SERVICE_PROVIDER_SERVICES } from "../constant";

const serviceProviderServicesData = [];
export const serviceProviderServicesReducer = (
  state = serviceProviderServicesData,
  action
) => {
  switch (action.type) {
    case SET_SERVICE_PROVIDER_SERVICES:
      if (action && Array.isArray(action.data)) {
        if (action.data) {
          return action.data;
        }
        return state;
      } else {
        return state;
      }
    default:
      return state;
  }
};

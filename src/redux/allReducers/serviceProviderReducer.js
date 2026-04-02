import { SET_SERVICE_PROVIDER } from "../constant";

const serviceProviderData = [];
export const serviceProviderReducer = (state = serviceProviderData, action) => {
  switch (action.type) {
    case SET_SERVICE_PROVIDER:
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

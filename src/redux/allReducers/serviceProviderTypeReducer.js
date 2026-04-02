import { SET_SERVICEPROVIDERTYPE } from "../constant";

const serviceProviderTypeData = [];
export const serviceProviderTypeReducer = (
  state = serviceProviderTypeData,
  action
) => {
  switch (action.type) {
    case SET_SERVICEPROVIDERTYPE:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

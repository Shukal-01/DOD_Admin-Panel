import { SET_SERVICE_PROVIDER_SERVICE_CATEGORIES } from "../constant";

const serviceProviderServiceCategoryData = [];
export const serviceProviderServiceCategoryReducer = (
  state = serviceProviderServiceCategoryData,
  action
) => {
  switch (action.type) {
    case SET_SERVICE_PROVIDER_SERVICE_CATEGORIES:
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

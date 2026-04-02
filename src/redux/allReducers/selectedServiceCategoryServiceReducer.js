import { SET_SELECTED_SERVICE_CATEGORY_SERVICE } from "../constant";

const selectedServiceCategoryServiceData = false;
export const selectedServiceCategoryServiceReducer = (
  state = selectedServiceCategoryServiceData,
  action
) => {
  switch (action.type) {
    case SET_SELECTED_SERVICE_CATEGORY_SERVICE:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

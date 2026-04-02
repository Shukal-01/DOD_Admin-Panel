import { SET_SELECTED_SERVICE_CATEGORY } from "../constant";

const selectedServiceCategoryData = false;
export const selectedServiceCategoryReducer = (
  state = selectedServiceCategoryData,
  action
) => {
  switch (action.type) {
    case SET_SELECTED_SERVICE_CATEGORY:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

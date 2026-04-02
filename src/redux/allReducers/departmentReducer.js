import { SET_DEPARTMENTS } from "../constant";

const departmentsData = [];
export const departmentReducer = (state = departmentsData, action) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

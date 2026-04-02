import { SET_ROLES } from "../constant";

const roles = [];
export const roleReducer = (state = roles, action) => {
  switch (action.type) {
    case SET_ROLES:
      sessionStorage.setItem("AllRolesList", JSON.stringify(action.data.data));
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

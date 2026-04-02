import { SET_USERS } from "../constant";

const users = [];
export const userReducer = (state = users, action) => {
  switch (action.type) {
    case SET_USERS:
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

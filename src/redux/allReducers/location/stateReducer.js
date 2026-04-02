import { SET_STATE } from "../../constant";

const stateData = [];
export const stateReducer = (state = stateData, action) => {
  switch (action.type) {
    case SET_STATE:
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

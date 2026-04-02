import { SET_EVENTS } from "../constant";

const eventData = [];
export const eventReducer = (state = eventData, action) => {
  switch (action.type) {
    case SET_EVENTS:
      if (action.data && action.data.data) {
        return action.data.data;
      }
      if (action.data) {
        return action.data;
      }
      return state;
    default:
      return state;
  }
};

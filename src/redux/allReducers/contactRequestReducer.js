import { SET_CONTACT_REQUESTS } from "../constant";

const contactRequests = [];
export const contactRequestReducer = (state = contactRequests, action) => {
  switch (action.type) {
    case SET_CONTACT_REQUESTS:
      if (action.data) {
        return action.data.data;
      }
      return state;
    default:
      return state;
  }
};

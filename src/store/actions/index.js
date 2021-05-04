import * as action from "../actionTypes";

export const add_user = (name) => ({
  type: action.ADD_USER,
  name,
});

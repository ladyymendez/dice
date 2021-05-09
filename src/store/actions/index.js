import * as action from "../actionTypes";

export const add_user = (name) => ({
  type: action.ADD_USER,
  name,
});

export const add_dice = (number) => ({
  type: action.ADD_DICE,
  number,
});

export const last_values = (lastValues) => ({
  type: action.LAST_VALUES,
  lastValues,
});
export const next_player = (start) => ({
  type: action.NEXT_PLAYER,
  start,
});

export const total_player = (total) => ({
  type: action.TOTAL_PLAYER,
  total,
});

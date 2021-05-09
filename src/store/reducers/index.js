import {
  ADD_USER,
  ADD_DICE,
  LAST_VALUES,
  NEXT_PLAYER,
  TOTAL_PLAYER,
} from "../actionTypes";

const initialState = {
  users: [],
  dices: [],
  valueByUsers: [0],
  lastValues: [],
  player: 0,
  // testUsers: [
  //   { name: "Lady", lastValues: [1, 2, 3], dices: [10, 20, 3], total: 6 },
  // ],
};

export default function dice(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.name] };
    case ADD_DICE:
      return { ...state, dices: [...state.dices, action.number] };
    case LAST_VALUES:
      return { ...state, lastValues: action.lastValues };
    case NEXT_PLAYER:
      if (action.start) {
        return { ...state, player: 0 };
      } else {
        return { ...state, player: state.player + 1 };
      }
    case TOTAL_PLAYER:
      return { ...state, valueByUsers: [...action.total] };
    default:
      return state;
  }
}

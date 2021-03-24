import * as types from "../types";

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case types.TEST_CASE:
      return {
        ...state,
        Hello: "World",
      };

    default:
      return state;
  }
};

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../../actions/counter";

export const initialState = {
  count: 0
};

export function counterReducers(state = initialState, action) {
  const count = state.count;
  let newCount = 0;

  switch (action.type) {
    case INCREMENT_COUNTER:
      newCount = action.data;
      newCount = count + newCount;

      return {
        ...state,
        ...{
          count: newCount
        }
      };

    case DECREMENT_COUNTER:
      newCount = action.data;
      newCount = count - newCount;

      return {
        ...state,
        ...{
          count: newCount
        }
      };

    default:
      return state;
  }
}

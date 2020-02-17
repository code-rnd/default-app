export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const incrementCounter = (count = 1) => ({
  type: INCREMENT_COUNTER,
  data: count
});

export const decrementCounter = (count = 1) => ({
  type: DECREMENT_COUNTER,
  data: count
});

export const incrementCounterAsync = (count, sec = 3) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementCounter(count));
    }, 1000 * sec);
  };
};

export const decrementCounterAsync = (count, sec = 3) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrementCounter(count));
    }, 1000 * sec);
  };
};

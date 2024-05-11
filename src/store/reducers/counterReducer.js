const initialState = {
  count: 0,
};

export const COUNTER_ACTIONS = {
  INCREMENT: "INCREMENT",
  ASYNC_INCREMENT: "ASYNC_INCREMENT",
  DECREMENT: "DECREMENT",
  ASYNC_DECREMENT: "ASYNC_DECREMENT",
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const incrementCreator = () => ({ type: COUNTER_ACTIONS.INCREMENT });
export const asyncIncrementCreator = () => ({
  type: COUNTER_ACTIONS.ASYNC_INCREMENT,
});
export const decrementCreator = () => ({ type: COUNTER_ACTIONS.DECREMENT });
export const asyncDecrementCreator = () => ({
  type: COUNTER_ACTIONS.ASYNC_DECREMENT,
});

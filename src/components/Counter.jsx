import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from "../store/reducers/counterReducer";

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementCreator())}>Increment</button>
      <button onClick={() => dispatch(asyncIncrementCreator())}>
        Async Increment
      </button>
      <button onClick={() => dispatch(decrementCreator())}>Decrement</button>
      <button onClick={() => dispatch(asyncDecrementCreator())}>
        Async Decrement
      </button>
    </>
  );
}

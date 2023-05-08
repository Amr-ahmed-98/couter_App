import Button from "./ui/Button";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const icreaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <Fragment>
      <div className={classes.content}>
        <div className={classes["content-child"]}>
          {show && (
            <div className={classes.title}>
              <p>{counter}</p>
            </div>
          )}
          <div className={classes.buttons}>
            <Button onClick={incrementHandler}>Increment</Button>
            <Button onClick={decrementHandler}>Decrement</Button>
            <Button onClick={toggleHandler}>Toggle</Button>
            <Button onClick={icreaseHandler}>increse by 10</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Counter;

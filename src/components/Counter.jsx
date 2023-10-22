import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillSetting,
  AiOutlineReload,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import React from "react";
import useCounter from "./useCounter";
import "../Styles/counter.css";
import NavBar from "./NavBar";

function Counter() {
  // Initialize the counter and functions using the custom hook
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <>
      <NavBar />
      <div className="counter-cont">
        <div className="btn">
          <button className="decrement-btn" onClick={decrement}>
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => setValue(Number(e.target.value))}
          />

          <button className="increment-btn" onClick={increment}>
            <AiOutlinePlus />
          </button>
          <button className="reset-btn" onClick={reset}>
            <AiOutlineReload />
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;

import React, { useState } from "react";

import "./style.scss";

export default function CounterComponent(props) {
  // прокинутые диспатчи
  const {
    incrementCounter,
    decrementCounter,
    incrementCounterAsync,
    decrementCounterAsync
  } = props;

  // прокинутый стэйт
  const { count } = props;

  // локальный стейт в хуках
  const [isCountInc, setIsCountInc] = useState(1);
  const [isCountDec, setIsCountDec] = useState(1);

  return (
    <div className={"counter"}>
      <div className={"display"}>{count}</div>

      <div className={"counter__container counter-increment"}>
        <div className={"input-increment"}>
          <input
            type={"text"}
            value={isCountInc}
            onChange={e => {
              setIsCountInc(+e.currentTarget.value);
            }}
          />
        </div>
        <div className="btn-increment">
          <input
            type={"button"}
            value={"incr"}
            onClick={() => {
              incrementCounter(isCountInc);
            }}
          />
          <input
            type={"button"}
            value={"incr-Async"}
            onClick={() => {
              incrementCounterAsync(isCountInc);
            }}
          />
        </div>
      </div>

      <div className={"counter__container counter-decrement"}>
        <div className={"input-decrement"}>
          <input
            type={"text"}
            value={isCountDec}
            onChange={e => {
              setIsCountDec(+e.currentTarget.value);
            }}
          />
        </div>
        <div className="btn-decrement">
          <input
            type={"button"}
            value={"decr"}
            onClick={() => {
              decrementCounter(isCountDec);
            }}
          />
          <input
            type={"button"}
            value={"decr-Async"}
            onClick={() => {
              decrementCounterAsync(isCountDec);
            }}
          />
        </div>
      </div>
    </div>
  );
}

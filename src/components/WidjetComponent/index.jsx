import React from "react";
import { CounterContainer } from "../../containers/counter/CounterContainer";
import { DefaultContainer } from "../../containers/default/DefaultContainer";
import { SwContainer } from "../../containers/sw/SwContainer";

export default function WidjetComponent(props) {
  return (
    <div className={"widjet"}>
      <CounterContainer />
      <DefaultContainer />
      <SwContainer />
    </div>
  );
}

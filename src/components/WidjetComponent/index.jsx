import React from "react";
import { CounterContainer } from "../../containers/counter";
import { DefaultContainer } from "../../containers/default/DefaultContainer";

import "./style.scss";

export default function WidjetComponent(props) {
  return (
    <div className={"widjet"}>
      <CounterContainer />
      <DefaultContainer />
    </div>
  );
}

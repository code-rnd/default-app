import React from "react";

import "./style.scss";

export default function DefaultComponent(props) {
  const { changeText, currentText } = props;

  return (
    <div className="default margin-top20px">
      <div>
        <span>
          {currentText && currentText !== " " ? currentText : "напечатай"}
        </span>
      </div>
      <br />
      <div>
        <input
          type={"text"}
          placeholder={"text"}
          onChange={e => changeText(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}

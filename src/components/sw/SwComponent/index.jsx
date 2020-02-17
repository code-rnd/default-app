import React, { useState } from "react";

export default function SwComponent(props) {
  const { getPeople, getPlanets, getStarships } = props;
  const { people, planets, starships } = props;
  const { isFetching } = props;

  const [isSearchId, setIsSearchId] = useState(1);

  const getFormSpin = () => {
    return <div className={"spin"}>загружаю...</div>;
  };

  const getFormDisplay = () => {
    return (
      <div className={"sw__display"}>
        <div>{people ? people : "герой не найден"}</div>
        <div>{planets ? planets : "планета не найдена"}</div>
        <div>{starships ? starships : "корабль не найден"}</div>
      </div>
    );
  };

  return (
    <div className={"sw"}>
      {isFetching ? getFormSpin() : getFormDisplay()}
      <div className={"sw__configMenu"}>
        <div className={"configInput"}>
          <input
            type={"text"}
            value={isSearchId}
            onChange={e => {
              setIsSearchId(+e.currentTarget.value);
            }}
          />
        </div>
        <div className={"configBtns"}>
          <input
            type={"button"}
            value={"getPeople"}
            onClick={() => {
              getPeople(isSearchId);
            }}
          />
          <input
            type={"button"}
            value={"getPlanets"}
            onClick={() => {
              getPlanets(isSearchId);
            }}
          />
          <input
            type={"button"}
            value={"getStarships"}
            onClick={() => {
              getStarships(isSearchId);
            }}
          />
        </div>
      </div>
    </div>
  );
}

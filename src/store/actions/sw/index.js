export const SET_PEOPLE = "SET_PEOPLE";
export const SET_PLANETS = "SET_PLANETS";
export const SET_STARSHIPS = "SET_STARSHIPS";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setPeople = people => ({
  type: SET_PEOPLE,
  data: people
});

export const setPlanets = planets => ({
  type: SET_PLANETS,
  data: planets
});

export const setStarships = starships => ({
  type: SET_STARSHIPS,
  data: starships
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});

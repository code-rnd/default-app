export const SET_HERO = "SET_HERO";
export const SET_PLANET = "SET_PLANET";
export const SET_STARSHIP = "SET_STARSHIP";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setHero = hero => ({
  type: SET_HERO,
  data: hero
});

export const setPlanet = planet => ({
  type: SET_PLANET,
  data: planet
});

export const setStarship = starship => ({
  type: SET_STARSHIP,
  data: starship
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});

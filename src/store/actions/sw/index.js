export const SET_HERO = "SET_HERO";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const setHero = hero => ({
  type: SET_HERO,
  data: hero
});

export const toggleIsFetching = status => ({
  type: TOGGLE_IS_FETCHING,
  data: status
});

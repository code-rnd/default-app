import { toggleIsFetching, setHero } from "..";
import { swApi } from "../../../../api/swapi";

export const getHero = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getHero(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setHero(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

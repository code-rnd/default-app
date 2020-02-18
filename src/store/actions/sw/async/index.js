import { toggleIsFetching, setHero, setPlanet, setStarship } from "..";
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

export const getStarship = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getStarship(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setStarship(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

export const getPlanet = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getPlanet(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setPlanet(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

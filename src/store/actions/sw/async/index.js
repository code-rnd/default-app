import { toggleIsFetching, setPeople, setPlanets, setStarships } from "..";
import { swApi } from "../../../../api/swapi";

export const getPeople = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getPeople(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setPeople(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

export const getStarships = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getStarships(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setStarships(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

export const getPlanets = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    swApi
      .getPlanets(id)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setPlanets(data.name));
      })
      .catch(data => {
        dispatch(toggleIsFetching(false));
      });
  };
};

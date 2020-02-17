import {
  SET_PEOPLE,
  SET_PLANETS,
  SET_STARSHIPS,
  TOGGLE_IS_FETCHING
} from "../../actions/sw";

export const initialState = {
  data: {
    people: null,
    planets: null,
    starships: null
  },
  isFetching: false
};

export function swReducers(state = initialState, action) {
  const data = state.data;

  let newPeople = null;
  let newPlanets = null;
  let newStarships = null;
  let newIsFetching = null;

  switch (action.type) {
    case SET_PEOPLE:
      newPeople = action.data;

      return {
        ...state,
        ...{
          data: {
            ...data,
            people: newPeople
          }
        }
      };

    case SET_PLANETS:
      newPlanets = action.data;

      return {
        ...state,
        ...{
          data: {
            ...data,
            planets: newPlanets
          }
        }
      };

    case SET_STARSHIPS:
      newStarships = action.data;

      return {
        ...state,
        ...{
          data: {
            ...data,
            starships: newStarships
          }
        }
      };

    case TOGGLE_IS_FETCHING:
      newIsFetching = action.data;

      return {
        ...state,
        ...{
          isFetching: newIsFetching
        }
      };

    default:
      return state;
  }
}

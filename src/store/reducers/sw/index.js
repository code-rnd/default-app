import { SET_HERO, TOGGLE_IS_FETCHING } from "../../actions/sw";

export const initialState = {
  data: {
    hero: null
  },
  isFetching: false
};

export function swReducers(state = initialState, action) {
  const data = state.data;

  let newHero = null;
  let newIsFetching = null;

  switch (action.type) {
    case SET_HERO:
      newHero = action.data;

      return {
        ...state,
        ...{
          data: {
            ...data,
            hero: newHero
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

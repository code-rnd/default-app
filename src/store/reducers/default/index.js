import { CHANGE_TEXT } from "../../actions/default";

const initialContent = [
  {
    id: 0,
    name: "defaultName",
    phone: "404"
  },
  {
    id: 1,
    name: "defaultName",
    phone: "505"
  }
];

export const initialState = {
  content: [...initialContent]
};

export function defaultReducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, ...{ text: action.data } };

    default:
      return state;
  }
}

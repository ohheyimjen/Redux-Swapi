import /* we need our action types here*/ "../actions";
import { FETCH_CHARACTER_LIST, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: null,
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_LIST:
    return {
      ...state,
      error: '',
      isLoading: true
    }

    case SUCCESS:
    return {
      ...state,
      error: '',
      characters: action.payload
    }

    case FAILURE: 
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

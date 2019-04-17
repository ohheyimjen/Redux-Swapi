// we'll need axios
import { axios } from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTER_LIST = 'FETCH_CHARACTER_LIST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getCharacter= () => dispatch => {
    dispatch({type: FETCH_CHARACTER_LIST});

    axios.get('https://swapi.co/api/people/')
    .then(res => dispatch ({
        type: SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch ({
        type: FAILURE,
        payload: 'Fetch the characters, you can not'
    }))
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

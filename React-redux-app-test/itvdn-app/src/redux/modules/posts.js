// import {configureStore} from "../store";


const moduleName = 'post';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const defaultStote = {
    posts: [],

};
/**
 * {type: GET_POSTS, payload: {...}}
 */
export default ( state = defaultStote, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return{...state, post: payload}
            default:
             return state;
      }

};

export const getPosts = () => async (dispatch) => {
    dispatch({type: GET_POSTS, payload: [{ id: 1, title: 'asd' }] });

}
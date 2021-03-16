import configureStore from "../store";

const moduleName = 'post';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const defaultStote = {
    posts: [],

};
/**
 * {type: GET_POSTS, payload: {...}}
 */
export default ( stote = defaultStote, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return{...state, post: payload.data}
            defoult:
             return state;
      }

};

export const getPosts = () => async(dispatch) => {
    dispatch({type: GET_POSTS, payload: [{ id: 1, title: 'abc' }] })

}
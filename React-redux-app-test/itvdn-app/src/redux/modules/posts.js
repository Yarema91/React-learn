// import {configureStore} from "../store";


const moduleName = 'post';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const DELETE_POST = `${moduleName}/DELETE_POST`;

const posts = [];

const defaultStote = {
    posts
};
/**
 * {type: GET_POSTS, payload: {...}}
 */
export default (state = defaultStote, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return { ...state, post: payload }
         case DELETE_POST:
            return { ...state, posts: state.posts.filter(item => item.id !== payload.id )  }

        default:
            return state;
    }

};

export const getPosts = () => async (dispatch) => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => dispatch({type: GET_POSTS,  payload: data}))
    } catch (error) {
        console.log('error');
    }

}
export const deletePost = (id) => async (dispatch) => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
          dispatch({ type: DELETE_POST, payload: { id } })
    } catch (error) {
        console.log('error');
    }

}
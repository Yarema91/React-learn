import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction, deletePost as deletePostAction} from './redux/modules/posts';
import { useEffect, useState } from 'react';
import Post  from './components/Post/index.js'
import Item from 'antd/lib/list/Item';

 
function App({ posts, getPosts, deletePost }) {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    getPosts();            //componentDidMount()  
  }, [])

  // const deletePost = (id) => {

  // }

  return (
    <div className="App">
      {posts.length && posts.map(item => <Post  deletePost={deletePost} id={Item.id} key={item.id} title={item.title} body={item.body}/> )}
      
    </div>
  )
};



export default connect(
  ({ posts}) => ({ posts: posts.posts }),
  {
    getPosts: getPostsAction,
    deletePost: deletePostAction
  }
)(App);

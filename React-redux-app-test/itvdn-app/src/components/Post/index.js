import { Card, Button } from 'antd';

// ReactDOM.render(
//     <>
//       <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
//         <p>Card content</p>
//         <p>Card content</p>
//         <p>Card content</p>
//       </Card>
//       <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
//         <p>Card content</p>
//         <p>Card content</p>
//         <p>Card content</p>
//       </Card>
//     </>,
//     mountNode,
//   );

const Post = ({ id, title, body, deletePost }) => {
    
    <Card>  
        <h1>{title}</h1>
        <p>{body}</p>
        <Button onClick={()=> deletePost(id)} type='primery'>Delete</Button>
    </Card>

};

export default Post;
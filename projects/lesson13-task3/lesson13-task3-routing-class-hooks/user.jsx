import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//algo
//1. Create state => name, avatar, location
//2. 
const User = (props) => {
   const [ userState, setUserState ] = useState({
    userAvatar: null,
    userName: null,
    userLocation: null,
   })

   // input: 
   // output: 
   const { userId } = useParams();
   useEffect(() => {
       console.log("componentDidMount");
       console.log(("componentDidUpdate - когда компонента меняется"));

    //    fetch(`https://api.github.com/users/${userId}`)
    //      .then(response => response.json())
    //      .then(userData => {
    //          const { avatar_url, name, location } = userData;
    //          setUserState({
    //              userAvatar: avatar_url,
    //              userName: name,
    //              userLocation: location,
    //          })
    //     })
       

       return() => {
           console.log("componentWillUnmount");
       }
   }, [userId]);

   debugger;

   const { userAvatar, userName, userLocation } = userState;  
        if(!userAvatar || !userName || !userLocation) {
            return null;
        }
        return(
            <div className="user">
               <img alt="User Avatar" src={userAvatar} className="user__avatar"/>
               <div className="user__info">
              <span className="user__name">{userName}</span>
              <span className="user__location">{userLocation}</span>
               </div>
            </div>
          )
}

// class User extends Component {
//     state = {
//         userAvatar: '',
//         userName: '',
//         userLocation: '',
//     }
//     componentDidMount() {
//         this.getUserData(this.props.match.params.userId);
//     }

//     componentDidUpdate(prevProps) {
//         const curUserId = this.props.match.params.userId;
//         if (prevProps.match.params.userId != curUserId) {
//             this.getUserData(curUserId);
//         }
//     }

//     getUserData = (userId) => {
//         fetch(`https://api.github.com/users/${userId}`)
//         .then(response => response.json())
//         .then(userData => {
//             const { avatar_url, name, location } = userData;
//             this.setState({
//                 userAvatar: avatar_url,
//                 userName: name,
//                 userLocation: location,
//             })
//         })
//     };
//     render() {
        
//     }
// }
export default User;

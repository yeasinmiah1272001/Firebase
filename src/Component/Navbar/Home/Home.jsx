import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.init';


 
const Home = () => {
       const auth = getAuth(app);
       const provider = new GoogleAuthProvider();
       const [user, setUser] = useState()

      
       const handle= () =>{

              signInWithPopup(auth, provider)
              .then(result =>{
                     const user = result.user
                     console.log(user)
                     setUser(user)
              })
              .catch(error =>{
                     console.log(error)
              })

       }
       return (
         <div className="text-center items-center mx-auto my-40">
           <button onClick={handle} className="btn btn-primary ">
             Google
           </button>

           {user && (
             <div>
               <h1>{user.email}</h1>
               <h1>userName: {user.displayName}</h1>
               <img src={user.photoURL} alt="" />
             </div>
           )}
         </div>
       );
};

export default Home;
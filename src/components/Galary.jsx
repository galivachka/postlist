import React from 'react'
import useFetch from '../components/UseFetch.jsx';
import { useParams } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

    const Postssss = () => {
        const [posts] = useFetch(
          'https://jsonplaceholder.typicode.com/users'
        );
      
        const { id } = useParams();
        console.log(id);
      
        return (
          <div>
      
            {posts.length > 0
              ? posts.map((user) => <div key={user.id}>
                  
                  <div className="users-card">
                       User Galary:
                <h2>
                   {user.address.city} </h2> <br /> 
                   <h2>
                   {user.address.zipcode} </h2> <br /> 
                 
                  </div>
                 </div>)
              : null}
     
           {
              
           }
          </div>
       
        )
    }

export default Postssss
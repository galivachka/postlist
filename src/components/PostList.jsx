import useFetch from '../components/UseFetch.jsx';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Posts from "../components/Posts.jsx"
import Galary from '../components/Galary.jsx'
const PostListAxios = () => {
  const [posts] = useFetch(
    'https://jsonplaceholder.typicode.com/users'
    );
    
    const { id } = useParams();
    console.log(id);
    
    return (
      <div>
      <BrowserRouter>
      {posts.length > 0
        ? posts.map((user) => <div key={user.id}>
        
        <div className="users-card">
        Name:
        <h2>
        {user.name} </h2> <br /> 
        <h4>
        UserName: 
        {user.username}</h4> <br />
        Email: 
        {user.email} <br /> 
        Website: @ 
        {user.website} 
        Adress:  
        {user.address.zipcode}  <br />
        Phone:  
        { user.phone}  <br />


        <div className="Posts">
        
        
        <NavLink to="/Posts">
        <button>Posts</button> 
        
        </NavLink>
        <NavLink to="/Galary">
        <button>Galary</button> 
        </NavLink>
        
        <Routes>
        <Route exact path="Posts" element={<Posts/>} />
        <Route exact path="Galary" element={<Posts/>} />
        
        </Routes>
        </div>
        <div className="Galary">
        
        <NavLink to="/Galary">
        <button>Galary</button> 
        </NavLink>
        
        <Routes>
        <Route exact path="Galary" element={<Posts/>} />
        
        </Routes>
        </div>
        </div>
        </div>)
        : null}
        </BrowserRouter>
        {
          
        }
        </div>
        );
      };
      
      export default PostListAxios;
      
      
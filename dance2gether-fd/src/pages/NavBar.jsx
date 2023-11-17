import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const {user, token, logout} = useContext(UserContext);

  // console.log(user, 'user', token, 'token')


  return (
    <div>
        <nav>
        <div >
                {user ? (
                  <>
                  <NavLink to="/homepagelogin">MyHomePage</NavLink>
                  <NavLink to="searchUser">SearchUser</NavLink>
                  <NavLink to="myProfile">MyProfile</NavLink>
                  <button onClick={logout}>Logout</button>
                  </>
                ) : <>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/login">Sign in</NavLink>
                    <NavLink to="/register">Sign up</NavLink>
                    <NavLink to="/about">AboutUs</NavLink>
                  </>
                }
         </div>
        </nav>
    </div>
    
  )
}

export default Navbar
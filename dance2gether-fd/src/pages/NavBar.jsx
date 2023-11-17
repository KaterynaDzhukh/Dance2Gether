import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import { Fragment } from 'react';




const Navbar = () => {
  const {user, token, logout} = useContext(UserContext);

  // console.log(user, 'user', token, 'token')


  return (


      <nav className="bg-red-300 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="space-x-4">
      {token ? (
        <Fragment>
          <NavLink to="/homepagelogin" className="text-black mr-4 hover:text-gray-800 transition duration-300">MyHomePage</NavLink>
          <NavLink to="/searchUser" className="text-black mr-4 hover:text-gray-800 transition duration-300">SearchUser</NavLink>
          <NavLink to="/myProfile" className="text-black mr-4 hover:text-gray-800 transition duration-300">MyProfile</NavLink>
          <button onClick={logout} className="text-black hover:text-gray-800 transition duration-300">Logout</button>
        </Fragment>
      ) : (
        <Fragment>
          <NavLink to="/home" className="text-black mr-4 hover:text-gray-800 transition duration-300">Home</NavLink>
          <NavLink to="/login" className="text-black mr-4 hover:text-gray-800 transition duration-300">Sign in</NavLink>
          <NavLink to="/register" className="text-black mr-4 hover:text-gray-800 transition duration-300">Sign up</NavLink>
          <NavLink to="/about" className="text-black hover:text-gray-800 transition duration-300">AboutUs</NavLink>
        </Fragment>
      )}
  </div>
  </div>
</nav>

  )
}

export default Navbar
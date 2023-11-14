import "./App.css";
import{ Routes, Route, Navigate} from 'react-router-dom'
import Messenger from "./pages/Messenger";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser.jsx";
import Registration from "./pages/Registration.jsx";
import LogIn from "./pages/LogIn.jsx";

import UserProvider from "./context/UserContext.jsx";
import { useContext } from "react";



  // const { user } = useContext(UserProvider);


import NavBar from "./pages/NavBar.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx"
import UserProfile from "./pages/UserProfile.jsx";
import MyHomePage from "./pages/MyHomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";





function App() {
return (
      <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<AboutUs/>} /> 
        <Route path="/homepagelogin" element={<MyHomePage/>} /> 
        <Route path="/messenger" element= { <Messenger />}/> 
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/searchUser" element={<SearchUser/>} />
        <Route path="/updateProfile/:id" element={<UpdateProfile/>} />
        <Route path="/userProfile/:id" element={<UserProfile/>} />
  </Routes>
  </>
)}


export default App;


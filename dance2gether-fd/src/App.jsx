import "./App.css";
//import { useEffect, useState } from "react";
//import io from "socket.io-client";
//const socket = io.connect("http://localhost:3000");
//import { useContext } from "react";
import{BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//import Messenger from "./pages/Messenger";
//import Home from "./pages/Home";
//import { AuthContext } from "./contex/AuthContex";
import SearchUser from "../components/SearchUser";
import Registration from "../components/Registration.jsx";
import LogIn from "../components/LogIn";

function App() {
  //const { user } = useContext(AuthContext);
return (
      <>
        <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/messenger" element= {user ? <Navigate to="/" /> : <Messenger />}/> */}
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/searchUser" element={<SearchUser/>} />
  </Routes>
  </BrowserRouter>
  </>
)}

export default App;


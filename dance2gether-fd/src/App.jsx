import "./App.css";
import{ Routes, Route, Navigate } from 'react-router-dom'
import Messenger from "./pages/Messenger";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser.jsx";
import Registration from "./pages/Registration.jsx";
import LogIn from "./pages/LogIn.jsx";
import NavBar from "./pages/NavBar.jsx";


function App() {
return (
      <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/messenger" element= { <Messenger />}/> 
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/searchUser" element={<SearchUser/>} />
  </Routes>
  </>
)}


export default App;


import "./App.css";
import{ Routes, Route, Navigate} from 'react-router-dom'
import Messenger from "./pages/Messenger";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser.jsx";
import Registration from "./pages/Registration.jsx";
import LogIn from "./pages/LogIn.jsx";
import NavBar from "./pages/NavBar.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx"
import UserProfile from "./pages/UserProfile.jsx";
import MyHomePage from "./pages/MyHomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import MyProfile from './pages/MyProfile.jsx'




function App() {

return (

      <>
      <div className="bg-red-300 w-full overflow-hidden text-black">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1900px] w-full`}>
<NavBar /> 
</div>
    </div>
  </div>
<Routes>

<Route path="/myhomepage" element={<MyHomePage/>} />
<Route path="/messenger" element= { <Messenger />}/>
<Route path="/searchUser" element={<SearchUser/>} />
<Route path="/updateProfile/:id" element={<UpdateProfile/>} />
<Route path="/myProfile" element={<MyProfile/>} />
<Route path="/home" element={<Home/>} />
<Route path="/about" element={<AboutUs/>} /> 
<Route path="/register" element={<Registration/>} />
<Route path="/login" element={<LogIn/>} />
<Route path="/*" element={<Navigate to={'/login'} />} />
<Route path="/userProfile/:id" element={<UserProfile/>} />

</Routes>

</>
)}


export default App;

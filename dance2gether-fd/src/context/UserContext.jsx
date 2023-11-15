
import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 export const UserContext = createContext();

 const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);
    const [user, setUser] = useState(null);

    const login = async(email, password, setLoading, setLoggedIn) => {
         const payload = { email, password };
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/registration/login', payload, {
            headers: { 'Content-Type': 'application/json'}
            });
            console.log(response.data.user)
            const { token } = response.data.token;
             sessionStorage.setItem('token', token);
             setToken(token)
             setUser(response.data.user)
            setLoggedIn(true);
           // setTimeout(() => {
           // navigate('/homepagelogin');
          //  }, 3000);
        }catch(error){
            console.log("Could not fetch data.");
        }finally{
            setLoading(false)
        } 
    }

    const logout = () => {
        sessionStorage.removeItem('token');
        setUser(null);
        setToken(null);
        navigate('/login');
        setLoggedIn(false)
    }
    return(
        <UserContext.Provider value={{login, logout, token, user}}> {children} </UserContext.Provider>
    )
}




export default UserProvider




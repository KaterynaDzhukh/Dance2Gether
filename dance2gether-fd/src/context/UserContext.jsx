
import axios from "axios";
import React, { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

 export const UserContext = createContext();

 const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);
    const [user, setUser] = useState(null);

    const login = async(email, password, setLoading, setLoggedIn ) => {
        const payload = { email, password };
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', payload, {
            headers: {'Content-Type': 'application/json'}
            });
            console.log(response.data.user)
            const { token} = response.data;
            sessionStorage.setItem('token', token);
            setToken(token) 
            setUser(response.data.user)
            setLoggedIn(true);
          //  setTimeout(() => {
          //  navigate('/homepagelogin');
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
    }
{/*
{useEffect(() => {
    const fetchUserData = async () => {
        if (token) {
            try {
                const response = await axios.get('http://localhost:3000/api/auth/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data)
                setUser(response.data);
            } catch (err) {
                console.error('Failed to fetch user data:', err);
                logout();
            }
        }
    };
    fetchUserData();
}, [token]);
*/}
    return(
        <UserContext.Provider value={{login, logout, token, user}}> {children} </UserContext.Provider>
    )
}

export default UserProvider

 

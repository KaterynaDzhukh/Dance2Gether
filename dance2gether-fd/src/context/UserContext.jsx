import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);
    const [user, setUser] = useState(null);

    const login =async(email, password, setLoading, setLoggedIn)=>{
    const payload = { email, password };
    setLoading(true);
try {
        const response = await axios.post('http://localhost:3000/api/registration/login', payload, {
        headers: { 'Content-Type': 'application/json'}
        });
        console.log('response')
        const { token, user } = response.data;
        sessionStorage.setItem('token', token);
        setUser(user)
        setLoggedIn(true);
        setTimeout(() => {
        navigate('/');
        }, 3000);
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
    return(
        <UserContext.Provider value={{user, token, login, logout}}> {children} </UserContext.Provider>
    )
}



// export default UserContextProvider
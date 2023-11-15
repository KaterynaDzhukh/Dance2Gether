import React, {useContext} from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import {UserContext} from "../context/UserContext.jsx";

const PrivateRoutes = () => {

    const {user, token} = useContext(UserContext);

    return !user ? <Navigate to="/home" /> : <Outlet />
}

export default PrivateRoutes
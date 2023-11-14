import React, {useContext} from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const PublicRoutes = () => {

    const {user, token} = useContext(UserContext);
    return user ? <Navigate to="/homepagelogin" /> : <Outlet />
}

export default PublicRoutes
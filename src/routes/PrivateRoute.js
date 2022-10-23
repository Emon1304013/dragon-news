import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import LoadingSpinner from '../pages/others/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(user);
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state= { {from : location} } replace></Navigate>
    
};

export default PrivateRoute;
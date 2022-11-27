import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderSpin from '../Utilities/Context/Loader/LoaderSpin';
import { AuthContext } from '../Utilities/Context/UserContext';



const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(AuthContext);
    const location=useLocation();
    console.log(location,user);
    if(loader)
    {
        return <LoaderSpin></LoaderSpin>;
    }
    if(user && user.uid)
    {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
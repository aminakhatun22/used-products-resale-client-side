


import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const BuyersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <progress className="progress bg-orange-300 w-56"></progress>
    }
    if (user && user?.role === 'user') {
        return children;
    }
    return <Navigate to="/errorpage" state={{ from: location }} replace ></Navigate>



};

export default BuyersRoute;
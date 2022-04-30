import React from "react";
import {Navigate, Outlet} from 'react-router-dom'

export default function ProtectedRoute({
    token, children}) {
    if (!token) {
        return <Navigate to='/' replace/>;
    }
    return children ? children : <Outlet/>;
}
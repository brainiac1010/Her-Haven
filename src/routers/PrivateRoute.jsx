import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user)


  const location = useLocation();
  if (!user) {
    alert('you must be logged in ')
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  if (role && user.role !== role) {
    alert('you are not authorized to access this page!')
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }

  return children;
}

export default PrivateRoute
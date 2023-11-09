import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Periksa apakah pengguna telah login

  if (isAuthenticated) {
    return <Route {...rest} element={element} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;

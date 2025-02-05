import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthGuard = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return children;
};

export default AuthGuard;

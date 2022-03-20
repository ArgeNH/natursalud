import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ checking }) => {

   const location = useLocation();
   localStorage.setItem('lastPath', location.pathname);

   return checking
      ? <Outlet />
      : <Navigate to={`/login`} state={{ from: location }} />;
};

PrivateRoute.propTypes = {
   checking: PropTypes.bool
};
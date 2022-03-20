import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ checking }) => {

   const location = useLocation();

   return checking
      ? <Navigate to='/' state={{ from: location }} />
      : <Outlet />;
};
PublicRoute.propTypes = {
   checking: PropTypes.bool
};
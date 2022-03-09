import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {

   const { checking } = useSelector(state => state.auth);

   return checking
      ? children
      : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
   children: PropTypes.object.isRequired
};
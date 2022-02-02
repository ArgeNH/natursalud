import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {

   const { loading } = useSelector(state => state.ui);

   return loading
      ? children
      : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
   children: PropTypes.object.isRequired
};
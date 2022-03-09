import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthLogin } from '../components/auth/AuthLogin';
import { AuthRegister } from '../components/auth/AuthRegister';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(startChecking());
   }, [dispatch]);

   return (
      <BrowserRouter>
         <Routes>

            <Route
               path='/login'
               element={
                  <PublicRoute>
                     <AuthLogin />
                  </PublicRoute>
               }
            />

            <Route
               path='/register'
               element={
                  <PublicRoute>
                     <AuthRegister />
                  </PublicRoute>
               }
            />

            <Route path='/*'
               element={
                  <PrivateRoute >
                     <DashboardRoutes />
                  </PrivateRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   )
}

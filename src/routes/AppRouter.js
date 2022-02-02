import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthLogin } from '../components/auth/AuthLogin';
import { AuthRegister } from '../components/auth/AuthRegister';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
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

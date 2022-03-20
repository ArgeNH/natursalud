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
   //const { _id: id } = useSelector(state => state.auth);
   const auth = JSON.parse(localStorage.getItem('auth'));
   console.log(typeof auth);
   console.log(auth);

   useEffect(() => {
      dispatch(startChecking());
   }, [dispatch]);

   return (
      <BrowserRouter>
         <Routes>

            <Route path='/*' element={<PublicRoute checking={auth} />}>
               <Route path='login' element={<AuthLogin />} />
               <Route path='register' element={<AuthRegister />} />
            </Route>


            <Route path='/*' element={<PrivateRoute checking={auth} />} history={history}>
               <Route path='*' element={<DashboardRoutes />} />
            </Route>

         </Routes>
      </BrowserRouter>
   )
}
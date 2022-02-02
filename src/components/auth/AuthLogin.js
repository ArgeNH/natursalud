import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { startLoginWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import { Error } from '../alerts/Error';

export const AuthLogin = () => {

   const dispatch = useDispatch();
   const { msgError, nameError } = useSelector(state => state.ui);

   const [formValues, handleInputChange] = useForm({
      email: 'arge@gmail.com',
      password: '123456'
   });

   const { email, password } = formValues;

   const navigate = useNavigate();

   const handleRegister = () => {
      dispatch(removeError());
      navigate('/register', {
         replace: true
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid()) {
         dispatch(startLoginWithEmailAndPassword(email, password));
      }
   }

   const isValid = () => {
      if (!validator.isEmail(email)) {
         dispatch(setError('El email es incorrecto', 'Email'));
         return false;
      } else if (password.length === 0) {
         dispatch(setError('El campo de contraseña esta vacio', 'Contraseña'));
         return false;
      }
      dispatch(removeError());
      return true;
   }

   return (
      <>
         <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md dark:bg-white mt-20">
            <div className="px-6 py-4">
               <h2 className="text-3xl font-bold text-center text-white dark:text-gray-700">Miscelánea Rodríguez</h2>

               <h3 className="mt-1 text-xl font-medium text-center text-gray-200 dark:text-gray-600">Bienvenido de vuelta</h3>

               <p className="mt-1 text-center text-gray-400 dark:text-gray-500">Ingreso a nuestra tienda</p>

               <form>
                  <div className="w-full mt-4">
                     <input
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        name='email'
                        type="email"
                        placeholder="ej. John@gmail.com"
                        aria-label="Email Address"
                        value={email}
                        onChange={handleInputChange}
                     />
                  </div>

                  <div className="w-full mt-4">
                     <input
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        name='password'
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        value={password}
                        onChange={handleInputChange}
                     />
                  </div>

                  <div className="flex items-center justify-end mt-4">
                     <button
                        className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                        type="onSubmit"
                        onClick={handleSubmit}
                     >
                        Iniciar Sesión
                     </button>
                  </div>
               </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-700 dark:bg-gray-50">
               <span className="text-sm text-gray-200 dark:text-gray-600">¿No tienes una cuenta? </span>

               <a
                  className="mx-2 text-sm font-bold text-blue-400 dark:text-blue-500 hover:underline cursor-pointer"
                  onClick={handleRegister}
               >
                  Registrarse
               </a>
            </div>
         </div>

         {
            msgError &&
            (
               <Error name={nameError} desc={msgError} />
            )
         }
      </>

   )
}
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
         <div className="h-screen bg-gradient-to-br from-blue-300 to-indigo-600 flex justify-center items-center w-full">
            <form>
               <div className="bg-white px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
                  <div className="space-y-4">
                     <h1 className="text-center text-2xl font-semibold text-gray-600">Natursalud 🍃</h1>
                     <div>
                        <label className="block mb-1 text-gray-600 font-semibold">Correo</label>
                        <input
                           className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                           name='email'
                           type="email"
                           placeholder="ej. John@gmail.com"
                           aria-label="Email Address"
                           value={email}
                           onChange={handleInputChange} />
                     </div>
                     <div>
                        <label className="block mb-1 text-gray-600 font-semibold">Contraseña</label>
                        <input
                           className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                           name='password'
                           type="password"
                           placeholder="Password"
                           aria-label="Password"
                           value={password}
                           onChange={handleInputChange}
                        />
                     </div>
                  </div>
                  <button
                     className="mt-4 mb-2 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
                     type="onSubmit"
                     onClick={handleSubmit}
                  >
                     Iniciar Sesión
                  </button>
                  <a
                     className="text-md font-bold text-blue-400 dark:text-blue-500 hover:underline cursor-pointer"
                     onClick={handleRegister}
                  >
                     Registrarse
                  </a>
                  {
                     msgError &&
                     (
                        <Error name={nameError} desc={msgError} />
                     )
                  }
               </div>
            </form>
         </div>


      </>

   )
}
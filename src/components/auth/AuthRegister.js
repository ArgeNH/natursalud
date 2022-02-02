import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import { Error } from '../alerts/Error';
import { InputRegister } from './InputRegister';

export const AuthRegister = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { msgError, nameError } = useSelector(state => state.ui);

   const [formValues, handleInputChange] = useForm({
      name: '',
      lastName: '',
      password: '',
      passwordConfirmed: '',
      email: '',
      city: '',
      address: '',
      phone: ''
   });

   const {
      name, lastName,
      password, passwordConfirmed,
      email, city,
      address, phone } = formValues;

   const handleLogin = () => {
      dispatch(removeError());
      navigate('/login');
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid()) {
         dispatch(startRegister(name, lastName, password, email, city, address, phone));
      }
   }

   const isValid = () => {
      if (name.trim().length === 0) {
         dispatch(setError('El campo de nombre esta vacio', 'Nombre'));
         return false;
      } else if (lastName.trim().length === 0) {
         dispatch(setError('El campo de apellido esta vacio', 'Apellido'));
         return false;
      } else if (password !== passwordConfirmed || password.length < 5) {
         dispatch(setError('Las contraseñas no coinciden', 'Contraseña'));
         return false;
      } else if (!validator.isEmail(email)) {
         dispatch(setError('El email no es correcto', 'Email'));
         return false;
      } else if (city.trim().length === 0) {
         dispatch(setError('El campo de ciudad se encuentra vacio', 'Ciudad'));
         return false;
      } else if (address.trim().length === 0) {
         dispatch(setError('El campo de direccion se encuentra vacio', 'Direccion'));
         return false;
      } else if (phone.trim().length === 0) {
         dispatch(setError('El campo de telefono se encuentra vacio', 'Telefono'));
         return false;
      }
      dispatch(removeError());
      return true;
   }

   return (
      <>
         <section className="max-w-4xl p-6 mx-auto bg-gray-800 rounded-lg shadow-xl shadow-gray-900 backdrop-blur-sm dark:bg-gray-800 mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-200 dark:text-white">Registro de clientes</h2>
            <form>
               <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                  <InputRegister
                     label='Nombre'
                     name='name'
                     type='text'
                     place='ej. John'
                     value={name}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Apellido'
                     name='lastName'
                     type='text'
                     place='ej. Doe'
                     value={lastName}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Contraseña'
                     name='password'
                     type='password'
                     place='ej. ********'
                     value={password}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Confirmacion Contraseña'
                     name='passwordConfirmed'
                     type='password'
                     place='ej. ********'
                     value={passwordConfirmed}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Correo'
                     name='email'
                     type='email'
                     place='ej. John@gmail.com'
                     value={email}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Ciudad'
                     name='city'
                     type='text'
                     place='ej. Tota'
                     value={city}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Direccion'
                     name='address'
                     type='text'
                     place='ej. Calle 10 #21-12'
                     value={address}
                     handle={handleInputChange}
                  />

                  <InputRegister
                     label='Celular'
                     name='phone'
                     type='number'
                     place='ej. ##########'
                     value={phone}
                     handle={handleInputChange}
                  />
               </div>
               <div className="flex justify-end mt-6">
                  <button
                     className=" basis-1 px-8 text-lg py-4 leading-5 text-gray-200 transition-colors duration-200 transform bg-gray-900 rounded-md  hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                     onClick={handleSubmit}
                     type='submit'
                  >
                     Registrarse
                  </button>
               </div>
               <div className='justify-end mt-6'>
                  <a
                     className="basis-1 text-lg text-gray-200 cursor-pointer hover:text-gray-400 underline"
                     onClick={handleLogin}
                  >
                     Ya estoy registrado
                  </a>
               </div>
            </form>
         </section>

         {
            msgError &&
            (
               <Error name={nameError} desc={msgError} />
            )
         }
      </>
   )
}
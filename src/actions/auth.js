import { types } from "../types/types";
import { setError, startLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, password) => {
   return async (dispatch) => {
      await fetch('https://natursalud.herokuapp.com/api/user/signin', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email,
            password
         })
      })
         .then(response => response.json())
         .then(data => {
            if (data.success === false) {
               dispatch(setError(data.error, data.nameError));
               return false;
            }
            const { user } = data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role, data.token));
            dispatch(startLoading());
         })
         .catch(err => console.log(err));
   }
}

export const startRegister = (name, lastName, password, email, city, address, phone) => {
   return async (dispatch) => {
      await fetch('https://natursalud.herokuapp.com/api/user/signup', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            name,
            lastName,
            password,
            email,
            city,
            address,
            phone
         })
      })
         .then(response => response.json())
         .then(data => {
            const { user } = data;
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role, data.token));
            dispatch(startLoading());
         })
         .catch(err => console.log(err));
   }
}

export const login = (_id, name, lastName, email, city, address, phone, role, token) => ({
   type: types.login,
   payload: {
      _id,
      name,
      lastName,
      email,
      city,
      address,
      phone,
      role,
      token
   }
})


export const startChecking = () => {
   return async (dispatch) => {
      const token = localStorage.getItem('token') || '';

      if (token) {
         const data = await fetch('https://natursalud.herokuapp.com/api/user/token/renew', {
            headers: {
               'x-token': token
            }
         });
         const response = await data.json();
         if (response.success === true) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { user } = response;
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role, response.token));
            dispatch(checkingFinish());
         } else {
            console.log('No hay token');
         }
      } else {
         console.log('No hay token');
      }

   }
}
const checkingFinish = () => ({ type: types.authCheckingFinished });

export const logoutUser = () => {
   return async (dispatch) => {
      localStorage.removeItem('token');
      dispatch(logout());
   }
}

export const logout = () => ({
   type: types.logout
})
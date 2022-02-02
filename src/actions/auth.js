import { types } from "../types/types";
import { setError, startLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, password) => {
   return async (dispatch) => {
      await fetch('https://miscelanea-api.herokuapp.com/api/user/signin', {
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
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role, data.token));
            dispatch(startLoading());
         })
         .catch(err => console.log(err));
   }
}

export const startRegister = (name, lastName, password, email, city, address, phone) => {
   return async (dispatch) => {
      await fetch('https://miscelanea-api.herokuapp.com/api/user/signup', {
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

export const logout = () => ({
   type: types.logout
})
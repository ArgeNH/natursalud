import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
   switch (action.type) {
      case types.login:
         return {
            _id: action.payload._id,
            name: action.payload.name,
            lastName: action.payload.lastName,
            email: action.payload.email,
            city: action.payload.city,
            address: action.payload.address,
            phone: action.payload.phone,
            role: action.payload.role,
            token: action.payload.token
         }

      case types.logout:
         return {}

      default:
         return state;
   }
}
import { types } from "../types/types";

const initialState = {
   checking: false
}

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.login:
         return {
            ...state,
            checking: true,
            ...action.payload
         }

      case types.logout:
         return {
            checking: false
         }

      case types.authCheckingFinished:
         return {
            ...state,
            checking: true
         }

      default:
         return state;
   }
}
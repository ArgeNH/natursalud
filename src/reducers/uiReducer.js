import { types } from "../types/types";

const initialState = {
   loading: false,
   msgError: null,
   nameError: null
}

export const uiReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.uiSetError:
         return {
            ...state,
            msgError: action.payload.err,
            nameError: action.payload.name
         }

      case types.uiRemoveError:
         return {
            ...state,
            msgError: null,
            nameError: null
         }

      case types.uiStartLoading:
         return {
            ...state,
            loading: true
         }

      case types.uiFinishLoading:
         return {
            ...state,
            loading: false
         }

      default:
         return state;
   }
}
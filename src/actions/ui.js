import { types } from '../types/types';

export const setError = (err, name) => ({
   type: types.uiSetError,
   payload: {
      err,
      name
   }
});

export const removeError = () => ({
   type: types.uiRemoveError
});

export const startLoading = () => ({ type: types.uiStartLoading });

export const finishLoading = () => ({ type: types.uiFinishLoading });
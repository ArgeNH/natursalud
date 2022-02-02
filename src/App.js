import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

export const App = () => {

   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
}
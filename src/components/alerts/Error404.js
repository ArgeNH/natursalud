import React from 'react';
import PropTypes from 'prop-types';

import { Error } from './Error';

export const Error404 = ({ name, desc }) => {
   return (
      <div className="text-center container mx-auto px-20 mt-20">


         {name && <Error name={name} desc={desc} />}
         <img
            src="https://www.hyperui.dev/photos/confused-travolta.gif"
            alt="John Travolta confused"
            className="object-cover w-full h-full rounded-lg mt-5"
         />

         <p className="mt-6 text-red-500 text-2xl font-extrabold m-20">ERROR 404 - Pagina no encontrada</p>
      </div>
   )
}
Error404.propTypes = {
   name: PropTypes.string,
   desc: PropTypes.string
}
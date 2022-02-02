import React from 'react';
import PropTypes from 'prop-types';

export const InputProduct = ({ label, name, type, place, value, handle }) => {
   return (
      <div className='mt-3'>
         <label className="block text-md text-gray-900 font-medium dark:text-gray-200">{label}</label>
         <input
            name={name}
            type={type}
            className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={place}
            value={value}
            onChange={handle}
         />
      </div>
   );
};

InputProduct.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   type: PropTypes.string,
   place: PropTypes.string,
   value: PropTypes.string,
   handle: PropTypes.func
};
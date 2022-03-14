import React from 'react';
import PropTypes from 'prop-types';

export const ButtonCart = ({ size, color, name, action }) => {

   const style = size !== 0 ?
      `bg-${color}-500 text-xl w-full py-3 rounded-xl text-gray-50 shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 animate__animated animate__pulse`
      :
      'bg-gray-500 text-xl w-full py-3 rounded-xl text-gray-50 shadow-xl animate__animated animate__pulse';

   return (
      <div className="mt-7 mb-3">
         <button
            className={style}
            disabled={size === 0 ? true : false}
            onClick={action}
         >
            {name}
         </button>
      </div>
   )
}
ButtonCart.propTypes = {
   size: PropTypes.number,
   color: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   action: PropTypes.func
}
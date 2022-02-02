import React from 'react';
import PropTypes from 'prop-types';

export const InputRegister = ({ label, name, type, place, value, handle }) => {

    const styleInput = "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

    return (
        <div>
            <label className="text-gray-200 dark:text-gray-700">{label}</label>
            <input
                name={name}
                type={type}
                className={`${styleInput}`}
                autoComplete='off'
                placeholder={place}
                value={value}
                onChange={handle}
            />
        </div>
    )
}

InputRegister.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    place: PropTypes.string,
    value: PropTypes.string,
    handle: PropTypes.func
}
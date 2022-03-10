import React from 'react';
import PropTypes from 'prop-types';

export const InputRegister = ({ label, name, type, place, value, handle }) => {

    const styleInput = "bg-indigo-50 px-4 py-2 outline-none rounded-md w-full";     

    return (
        <div>
            <label className="block mb-1 text-gray-600 font-semibold">{label}</label>
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
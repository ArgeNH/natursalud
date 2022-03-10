import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardProduct = ({ route, nameCategory, img }) => {
    return (
    
        <Link to={route} className="w-full max-w-xs bg-white text-center rounded-lg  animate__animated animate__zoomIn">
            <img className="rounded-t-lg object-cover object-center w-full h-48 mx-auto" src={img} alt={nameCategory} />

            <div className="p-1">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{nameCategory}</h5>
            </div>
        </Link>

    )
}
CardProduct.propTypes = {
    route: PropTypes.string.isRequired,
    nameCategory: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
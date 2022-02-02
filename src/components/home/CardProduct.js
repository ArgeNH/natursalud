import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardProduct = ({ route, nameCategory, img }) => {
    return (
        <Link to={route} className="w-full max-w-xs text-center rounded-lg bg-gray-900 animate__animated animate__zoomIn">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img} alt={nameCategory} />

            <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-200 dark:text-gray-700">{nameCategory}</h3>
            </div>
        </Link>
    )
}
CardProduct.propTypes = {
    route: PropTypes.string.isRequired,
    nameCategory: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
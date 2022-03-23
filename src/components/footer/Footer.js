import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row mt-3">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Natursalud</a>

            <p className="py-2 text-gray-800 dark:text-white sm:py-0">Todos los derechos reservados ©</p>

            <div className="flex -mx-2">
                <Link to='/about' className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                    Nosotros
                </Link>
            </div>
        </footer>
    )
}
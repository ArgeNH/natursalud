import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Swal from 'sweetalert2';
import { setFormatPrice } from '../../../helpers/setFormatPrice';
import { ProductModalUpdate } from './ProductModalUpdate';

export const DataProduct = ({ url, code, nameProduct, category, price, cant }) => {

    const [modal, setModal] = useState(false);

    const formatPrice = setFormatPrice(price);

    const urlDelete = `https://natursalud.herokuapp.com/api/product/deleteProduct/${code}`;

    const handleDelete = async () => {
        await Swal.fire({
            icon: 'question',
            text: `${nameProduct} ¿Estas seguro que quiere eliminar este producto?`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(urlDelete, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.product);
                    });
                Swal.fire(
                    'Producto Eliminado',
                    'Se ha eliminado el producto',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        });
    }

    return (
        <>
            <tr className='text-center'>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full text-center"
                                src={url}
                                alt={nameProduct} />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap text-center">
                                {nameProduct}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-semibold">
                    <p className="text-gray-900 whitespace-no-wrap">{code}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap align-middle">
                        {category}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {formatPrice}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {cant}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                        className="mr-1 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-base rounded-lg focus:border-4 border-blue-300"
                        onClick={() => setModal(!modal)}
                    >
                        Actualizar
                    </button>
                    <button
                        className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-base rounded-lg focus:border-4 border-red-300"
                        onClick={handleDelete}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
            {
                modal ? <ProductModalUpdate
                    code={code}
                    modal={setModal}
                    nameProduct={nameProduct}
                    category={category}
                    price={price}
                    cant={cant}
                /> : null
            }
        </>
    )
}
DataProduct.propTypes = {
    url: PropTypes.string,
    code: PropTypes.string,
    nameProduct: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    cant: PropTypes.number
};
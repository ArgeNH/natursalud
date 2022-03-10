import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Swal from 'sweetalert2';
import { setFormatPrice } from '../../../helpers/setFormatPrice';
import { ProductModalUpdate } from './ProductModalUpdate';

const DataTable = ({ url, code, nameProduct, category, price, cant }) => {

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
         }
      });
   }

   return (
      <>
         <tr className='text-center'>
            <th className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
               <img className='object-scale-down h-12 w-12' src={url} alt={nameProduct} />
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-blueGray-900 font-medium">
               {code}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
               {nameProduct}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
               {category}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
               {formatPrice}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
               {cant}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 space-x-1">
               <button
                  className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-base rounded-lg focus:border-4 border-blue-300"
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
   );
};

DataTable.propTypes = {
   url: PropTypes.string,
   code: PropTypes.string,
   nameProduct: PropTypes.string,
   category: PropTypes.string,
   price: PropTypes.number,
   cant: PropTypes.number
};

export default DataTable;

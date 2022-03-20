import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { setFormatPrice } from '../../helpers/setFormatPrice';
import { capitalize } from '../../helpers/capitalize';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../actions/cart';

export const ItemCart = ({ code, nameProduct, total, category, url, counter, price }) => {

   const dispatch = useDispatch();

   const format = setFormatPrice(total);
   const formatPrice = setFormatPrice(price);
   const categoryCap = capitalize(category);

   const handleRemoveProduct = async (code, nameProduct) => {
      Swal.fire({
         title: `Quieres eliminar el producto (${nameProduct}) del carrito?`,
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Si, estoy seguro',
         denyButtonText: `No quiero eliminarlo`,
      }).then(async (result) => {
         if (result.isConfirmed) {
            await Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Se elimino el producto del carrito 😢',
               showConfirmButton: false,
               timer: 1500
            })
            dispatch(removeProduct(code));
         }
      })
   }

   return (
      <li className="flex items-center justify-between py-4">
         <div className="flex items-start">
            <img
               className="flex-shrink-0 object-cover w-40 h-40 rounded-lg"
               src={url}
               alt={nameProduct}
            />

            <div className="ml-4">
               <p className="text-base">{nameProduct}</p>

               <dl className="mt-1 space-y-1 text-base text-gray-500">
                  <div>
                     <dt className="inline">Categoria:</dt>
                     <dd className="inline"> {categoryCap}</dd>
                  </div>

                  <div>
                     <dt className="inline">Precio unitatrio:</dt>
                     <dd className="inline"> {formatPrice}</dd>
                  </div>
                  <div>
                     <dt className="inline">Cantidad:</dt>
                     <dd className="inline"> {counter}</dd>
                  </div>
                  <button
                     className='bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                     onClick={() => handleRemoveProduct(code, nameProduct)}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                     </svg>
                  </button>

               </dl>
            </div>
         </div>

         <div>
            <p className="text-lg font-semibold">
               {format}
            </p>
         </div>
      </li>

   )
}
ItemCart.propTypes = {
   nameProduct: PropTypes.string,
   total: PropTypes.number,
   price: PropTypes.number,
   category: PropTypes.string,
   counter: PropTypes.number,
   url: PropTypes.string,
   code: PropTypes.string
}
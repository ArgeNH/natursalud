import React from 'react';
import PropTypes from 'prop-types';
import { setFormatPrice } from '../../helpers/setFormatPrice';
import { capitalize } from '../../helpers/capitalize';

/* Falta solucionar la prop price para que de el precio
   en format price puse el total dividido en el counter para saber el valor inicial,
   pero tiene que ir una prop price 
*/

export const ItemCart = ({ nameProduct, total, category, url, counter, price}) => {

   const format = setFormatPrice(total);
   const formatPrice = setFormatPrice(price);
   const categoryCap = capitalize(category);

   return (
      <li className="flex items-center justify-between py-4">
         <div className="flex items-start">
            <img
               className="flex-shrink-0 object-cover w-32 h-32 rounded-lg"
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
   category: PropTypes.string,
   counter: PropTypes.number,
   url: PropTypes.string,
   price: PropTypes.number,
}
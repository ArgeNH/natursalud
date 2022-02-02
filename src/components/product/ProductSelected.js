import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { setFormatPrice } from '../../helpers/setFormatPrice';
import { fetcher } from '../../utils/fetcher';

export const ProductSelected = () => {

   const [counter, setCounter] = useState(1);
   const [isMin, setIsMin] = useState(false);

   const { code: codeParam, name } = useParams();

   const urlProduct = `https://miscelanea-api.herokuapp.com/api/product/${codeParam}`
   const { data } = useSWR(urlProduct, fetcher);

   if (!data) return <div>Loading...</div>;

   const { code, nameProduct, price, cant, category, url } = data.product[0];

   const formatPrice = setFormatPrice(price);

   console.log(code, nameProduct, price, cant, category, url, name);

   const handleCart = () => {
      console.log(counter);
   }

   return (
      <div className="container mx-auto px-6 mt-20 pt-20">
         <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
               <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={url} alt={nameProduct} />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
               <h3 className="text-gray-900 uppercase text-xl font-semibold">{nameProduct}</h3>
               <span className="text-gray-800 mt-3 text-lg font-normal">{formatPrice}</span>
               <hr className="my-3" />
               <div className="mt-2">
                  <label className="text-gray-700 tNameext-sm">Cantidad:</label>
                  <div className="flex items-center mt-1">
                     <button
                        className="text-gray-500 focus:outline-none focus:text-gray-600"
                        onClick={() => {
                           setCounter(counter + 1)
                           setIsMin(false);
                        }}
                     >
                        <svg className="h-7 w-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     </button>
                     <span className="text-gray-700 text-xl font-semibold mx-2">{counter}</span>
                     <button
                        className="text-gray-500 focus:outline-none focus:text-gray-600"
                        onClick={() => {
                           if (counter === 1) {
                              setIsMin(true);
                           } else {
                              setCounter(counter - 1);
                           }
                        }}
                        disabled={isMin}
                     >
                        <svg className="h-7 w-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     </button>
                  </div>
               </div>
               <div className="flex items-center mt-6">
                  <button
                     className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                     onClick={handleCart}
                  >
                     Agregar al carrito
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

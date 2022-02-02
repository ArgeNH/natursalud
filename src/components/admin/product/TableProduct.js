import React from 'react';
import useSWR from 'swr';

import { fetcher } from '../../../utils/fetcher';
import DataTable from './DataTable';

export const TableProduct = () => {

   const url = 'https://miscelanea-api.herokuapp.com/api/product';

   const { data } = useSWR(url, fetcher);
   let products = data?.products;

   return (
      <section className="py-1 bg-blueGray-50">
         <div className="w-full mb-12 px-4 mx-auto mt-10">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
               <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                     <thead>
                        <tr>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                              Imagen
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Codigo
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Nombre
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Categoria
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Precio
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Cantidad
                           </th>
                           <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                              Acciones
                           </th>
                        </tr>
                     </thead>

                     <tbody>
                        {
                           products?.map(product => (
                              <DataTable key={product._id} {...product} />
                           ))
                        }
                     </tbody>

                  </table>
               </div>
            </div>
         </div>
      </section>
   );
};

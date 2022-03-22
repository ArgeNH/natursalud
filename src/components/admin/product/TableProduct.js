import React from 'react';
import useSWR from 'swr';
import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { useForm } from '../../../hooks/useForm';

import { fetcher } from '../../../utils/fetcher';
import { Skeleton } from '../../product/category/Skeleton';
import { DataProduct } from './DataProduct';

export const TableProduct = () => {

   const url = 'https://natursalud.herokuapp.com/api/product';

   const [formValues, handleInputChange] = useForm({
      category: ''
   });


   const { category } = formValues;
   console.log(category);


   const { data } = useSWR(url, fetcher);

   const product = getProductByCategory(category, data?.products);

   if (!data) return <Skeleton />


   return (
      <>
         <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
               <div>
                  <h2 className="text-2xl font-semibold leading-tight">Productos</h2>
               </div>
               <div className="my-2 flex sm:flex-row flex-col">
                  <div className="flex flex-row mb-1 sm:mb-0">
                     <div className="relative">
                        <select
                           className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           name="category"
                           value={category}
                           onChange={handleInputChange}
                        >
                           <option defaultValue>Seleccione la categoria...</option>
                           <option value="VITAMINAS">Vitaminas</option>
                           <option value="PROTEINAS">Proteinas</option>
                           <option value="COLAGENOS">Colagenos</option>
                           <option value="ACEITES">Aceites</option>
                           <option value="COSMETICOS">Cosmeticos</option>
                           <option value="MEDICAMENTOS">Medicamentos</option>
                        </select>
                        <div
                           className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                     <table className="min-w-full leading-normal items-center align-middle">
                        <thead>
                           <tr>
                              <th
                                 className=" align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Producto
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Codigo
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Categoria
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Precio
                              </th>
                              <th
                                 className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Cantidad
                              </th>
                              <th
                                 className="align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                 Acciones
                              </th>
                           </tr>
                        </thead>
                        <tbody>

                           {
                              product?.map(product => (
                                 <DataProduct key={product._id} {...product} />
                              ))
                           }

                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

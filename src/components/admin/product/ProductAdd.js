import React from 'react';

import { InputProduct } from './InputProduct';

export const ProductAdd = () => {

   return (
      <div className="w-full max-w-3xl p-3 m-auto bg-white rounded-md shadow-md  mt-5 dark:bg-gray-800">

         <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
               <InputProduct
                  label='Codigo'
                  name='code'
                  place='132AFG'
                  type='text'
               />

               <InputProduct
                  label='Nombre Producto'
                  name='nameProduct'
                  place='Arroz'
                  type='text'
               />

               <InputProduct
                  label='Precio'
                  name='price'
                  place='12800'
                  type='number'
               />

               <InputProduct
                  label='Cantidad'
                  name='cant'
                  place='20'
                  type='number'
               />

               <div className="mt-3 w-auto">
                  <label className="block text-md text-gray-900 font-medium dark:text-gray-200">Categoria</label>
                  <select className="form-select appearance-none
                           block
                           w-full
                           px-3
                           py-1.5
                           text-base
                           font-normal
                           text-gray-700
                           bg-white bg-clip-padding bg-no-repeat
                           border border-solid border-gray-300
                           rounded
                           transition
                           ease-in-out
                           m-0
                           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                     <option defaultValue>Seleccione la categoria...</option>
                     <option value="PAPELERIA">Papeleria</option>
                     <option value="FARMACIA">Farmacia</option>
                     <option value="ASEO">Aseo</option>
                     <option value="HOGAR">Hogar</option>
                     <option value="FERRETERIA">Ferreteria</option>
                     <option value="OTROS">Otros</option>
                     <option value="PROMOCION">Promoción</option>
                  </select>
               </div>

               <InputProduct
                  label='Imagen'
                  name='image'
                  type='file'
               />

               <div className="mt-1">
                  <button
                     className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                     Añadir Producto
                  </button>
               </div>
            </div>
         </form>

      </div>
   )
}
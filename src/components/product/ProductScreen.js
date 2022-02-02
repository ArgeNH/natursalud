import React from 'react';

import { ProductAdd } from '../admin/product/ProductAdd';
import { TableProduct } from '../admin/product/TableProduct';

export const ProductScreen = () => {
   return (
      <section className="bg-gray-100 mt-10">
         <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 sm:py-20">
            <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl">
               Añadir nuevos productos
            </h2>

            <ProductAdd />

            <TableProduct />

         </div>
      </section>
   )
}
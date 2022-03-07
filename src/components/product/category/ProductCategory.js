import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import { CardItem } from './CardItem';
import { fetcher } from '../../../utils/fetcher';
import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { Skeleton } from './Skeleton';

export const ProductCategory = ({ nameCategory }) => {

   const url = 'https://natursalud.herokuapp.com/api/product';

   const { data } = useSWR(url, fetcher);

   if (!data) return <Skeleton />

   const product = getProductByCategory(nameCategory, data?.products);

   return (
      <div>
         <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-700">{nameCategory} ({product?.length})</h2>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

               {
                  product?.map(product => (
                     <CardItem key={product._id} {...product} />
                  ))
               }

            </div>
         </div>
      </div>
   )
}
ProductCategory.propTypes = {
   nameCategory: PropTypes.string
}
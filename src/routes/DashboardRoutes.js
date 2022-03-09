import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Error404 } from '../components/alerts/Error404';

import { ShoppingScreen } from '../components/cart/ShoppingScreen';
import { Footer } from '../components/footer/Footer';
import { Home } from '../components/home/Home';
import { Nabvar } from '../components/navbar/Nabvar';
import { Oil } from '../components/product/category/Oil';
import { Medicine } from '../components/product/category/Medicine';
import { Cosmetic } from '../components/product/category/Cosmetic';
import { Others } from '../components/product/category/Others';
import { Collagen } from '../components/product/category/Collagen';
import { Protein} from '../components/product/category/Protein';
import { Vitamin } from '../components/product/category/Vitamin';
import { ProductScreen } from '../components/product/ProductScreen';
import { ProductSelected } from '../components/product/ProductSelected';

export const DashboardRoutes = () => {
   return (
      <>
         <Nabvar />
         <div className='container mx-auto px-4'>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='vitaminas' element={<Vitamin />} />
               <Route path='proteinas' element={<Protein />} />
               <Route path='colagenos' element={<Collagen />} />
               <Route path='aceites' element={<Oil />} />
               <Route path='cosmeticos' element={<Cosmetic />} />
               <Route path='medicamentos' element={<Medicine />} />
               <Route path='otros' element={<Others />} />
               <Route path='404' element={<Error404 />} />

               <Route path='productos/:code/:name' element={<ProductSelected />} />
               <Route path='productos' element={<ProductScreen />} />
               <Route path='compra' element={<ShoppingScreen />} />

               <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
         </div>
         <Footer />
      </>
   )
}

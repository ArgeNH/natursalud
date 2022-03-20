import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { setCartEmpty } from '../../actions/cart';
import { setFormatPrice } from '../../helpers/setFormatPrice';
import { Error404 } from '../alerts/Error404';
import { ButtonCart } from './ButtonCart';
import { ItemCart } from './ItemCart';

export const ShoppingScreen = () => {

   const { products } = useSelector(state => state.cart);
   const { _id } = useSelector(state => state.auth);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const totalPrice = products.reduce((prev, { total }) => prev + total, 0);
   const formatPrice = setFormatPrice(totalPrice);

   const handleRemoveCart = async () => {
      await Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Tu carrito ha sido borrado 😢',
         showConfirmButton: false,
         timer: 2000
      });
      dispatch(setCartEmpty());
   }

   const handlePage = () => {
      navigate('/', true);
   }

   const handlePurchase = async () => {

      Swal.fire({
         title: 'Desea pagar el total de su carrito?',
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Pagar',
         denyButtonText: `Seguir comprando`,
      }).then(async (result) => {
         if (result.isConfirmed) {
            await fetch('https://natursalud.herokuapp.com/api/payments/orderBuy', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  value: totalPrice,
                  products
               })
            })
               .then(response => response.json())
               .then(data => {
                  if (data.success) {
                     Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se te esta redireccionando a Paypal',
                        showConfirmButton: false,
                        timer: 2000
                     });
                     window.location = data.response.links[1].href;
                  } else {
                     console.log('Fallo');
                  }

               })
               .catch(err => console.log('lol', err));
         } else if (result.isDenied) {
            navigate('/', { replace: true });
         }
      })

   }

   if (!_id) {
      return (
         <Error404
            name={'Iniciar sesión'}
            desc={'Porfavor inicie sesion para poder ver el carrito de compra 😄'}
         />
      )
   }

   return (
      <section className='mt-20'>
         <div className="relative mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="py-12 bg-gray-50 md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">
                     <div className="flex items-center">

                        <h2 className="font-semibold text-2xl">{products.length !== 0 ? 'Tu Carrito de compra' : ''}</h2>
                     </div>
                     <hr className='mt-2' />
                     {
                        products.length !== 0 ?
                           (
                              <>
                                 <div className="mt-8">
                                    <p className="text-2xl font-medium tracking-tight">{formatPrice}</p>
                                    <p className="mt-1 text-sm text-gray-500">Total a pagar</p>
                                 </div>
                                 <hr className='mt-2' />
                                 <div className="mt-12">
                                    <div className="flow-root">
                                       <ul className="-my-4 divide-y divide-gray-200">

                                          {
                                             products.map(product => (
                                                <ItemCart key={product.code} {...product} />
                                             ))
                                          }

                                       </ul>
                                    </div>
                                 </div>
                              </>
                           )
                           :
                           (
                              <div className='mt-20'>
                                 <h2 className="text-2xl font-semibold">Carrito vacio</h2>

                                 <ButtonCart
                                    name={'Ir a comprar productos'}
                                    color={'emerald'}
                                    action={handlePage}
                                 />

                              </div>
                           )
                     }
                  </div>
               </div>

               <div className="py-12 bg-gray-100 md:py-24">
                  <div className="max-w-lg px-4 mx-auto lg:px-8">

                     <div className="flex items-center">
                        <h2 className="font-semibold text-2xl">Opciones para pagar</h2>
                     </div>

                     <ButtonCart
                        size={products.length}
                        name={'Pagar con Paypal'}
                        color={'blue'}
                        action={handlePurchase}
                     />

                     <ButtonCart
                        size={products.length}
                        name={'Proximamente...'}
                        color={'blue'}
                        action={handlePurchase}
                     />

                     <hr />

                     <ButtonCart
                        size={products.length}
                        name={'Borrar carrito 🛒'}
                        color={'red'}
                        action={handleRemoveCart}
                     />

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
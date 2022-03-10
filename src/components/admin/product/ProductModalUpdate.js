import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { useForm } from '../../../hooks/useForm';
import { InputProduct } from './InputProduct';


/* const url = `https://natursalud.herokuapp.com/api/product/${code}`
const { data } = useSWR(url, fetcher);

if (!data) return <div>loading...</div> */

export const ProductModalUpdate = ({ code, modal, nameProduct: name, category: type, price: cash, cant: stock }) => {

   const [formValues, handleInputChange] = useForm({
      nameProduct: name,
      price: cash,
      cant: stock,
      category: type,
   });

   const { nameProduct, price, cant, category } = formValues;

   const handleUpdateProduct = async (e) => {
      e.preventDefault();
      await fetch(`https://natursalud.herokuapp.com/api/product/updateProduct/${code}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            nameProduct,
            price,
            cant,
            category
         })
      })
         .then(response => response.json())
         //eslint-disable-next-line
         .then(data => {
            Swal.fire({
               title: 'Producto Actualizado',
               text: 'El producto se ha actualizado correctamente',
               icon: 'success',
               confirmButtonText: 'Ok'
            })
            modal(false);
         })
         .catch(err => console.error(err))
   }


   return (
      <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
         >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                     <h3 className="text-3xl font-semibold">
                        Actualizar Producto - {nameProduct}
                     </h3>
                     <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => modal(false)}
                     >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                           ×
                        </span>
                     </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                     <form>

                        <InputProduct
                           label='Nombre Producto'
                           name='nameProduct'
                           place='Arroz'
                           type='text'
                           value={nameProduct}
                           handle={handleInputChange}
                        />

                        <InputProduct
                           label='Precio'
                           name='price'
                           place='12800'
                           type='number'
                           value={price}
                           handle={handleInputChange}
                        />

                        <InputProduct
                           label='Cantidad'
                           name='cant'
                           place='20'
                           type='number'
                           value={cant}
                           handle={handleInputChange}
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
                                    focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none"
                              aria-label="Default select example"
                              name='category'
                              value={category}
                              onChange={handleInputChange}>
                              <option defaultValue>Seleccione la categoria para actualizar</option>
                              <option value="VITAMINAS">Vitaminas</option>
                              <option value="PROTEINAS">Proteinas</option>
                              <option value="COLAGENOS">Colagenos</option>
                              <option value="ACEITES">Aceites</option>
                              <option value="COSMETICOS">Cosmeticos</option>
                              <option value="MEDICAMENTOS">Medicamentos</option>
                           </select>
                        </div>

                     </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                     <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => modal(false)}
                     >
                        Cerrar
                     </button>
                     <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleUpdateProduct}
                     >
                        Save Changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
   );
};

ProductModalUpdate.propTypes = {
   code: PropTypes.string,
   modal: PropTypes.func,
   nameProduct: PropTypes.string,
   category: PropTypes.string,
   price: PropTypes.number,
   cant: PropTypes.number,
};
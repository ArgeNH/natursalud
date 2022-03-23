import React from 'react';
import { getImage } from '../../helpers/getImage';

export const Information = () => {
   return (
      <section className="text-gray-600 body-font bg-gray-100 mt-5 rounded-lg border border-1 border-slate-300">
         <div className="container px-5 pt-20 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
               <div className="flex flex-col sm:flex-row mt-2">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                     <img src={getImage('./logo-espacio.png')} alt="Logo" className='w-96 h-96 object-cover' />
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                     <p className="leading-relaxed text-lg mb-4">
                        Tienda online de productos de las mejores marcas de vitaminas, minerales, suplementos alimenticios, esencias florales, homeopatía y cosméticos naturales.
                        <hr />
                        <br />
                        En nuestros tiendas ofrecemos a nuestros clientes asesoría de especialistas en Salud Natural y una amplia oferta de productos naturales y nutrición funcional seleccionados con altos estándares de calidad.
                        <hr />
                        <br />
                        Nos ubicamos en la <a href='https://goo.gl/maps/b6vydGvuqT6JuroC6' target='_blank' rel='noreferrer'> <strong> Carrera 15 #17-21 </strong></a> en el municipio de Duitama.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
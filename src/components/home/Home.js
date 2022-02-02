import React from 'react';

import { CardProduct } from './CardProduct';
import { info } from '../../data/infoProduct';
import { Information } from './Information';

export const Home = () => {
    return (
        <>
            <section className='bg-gray-100 mt-20'>
                <div className="max-w-screen-xl mt-10 px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-2 lg:items-center">
                        <div className="max-w-lg mx-auto text-center lg:text-left lg:py-10">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Online Shopping</h2>

                            <p className="mt-4 text-gray-600">
                                Nos ubicamos en el departamento de Boyaca, en el municipio de Tota.
                            </p>
                        </div>

                        <div className="relative h-60">
                            <img
                                className="absolute inset-0 object-contain w-full h-full rounded-xl"
                                src="/assets/logo.png"
                                alt="Miscelanea Rodriguez"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            <Information />

            <hr />

            <section className='bg-gray-100 pb-5 pt-5'>
                <h2 className="max-w-3xl text-2xl font-bold sm:text-3xl text-center m-5">
                    Nuestros productos
                </h2>
                <div className="flex items-center justify-center">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                        {
                            info.map(category => (
                                <CardProduct key={category.id} {...category} />
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
import React from 'react';

import { CardProduct } from './CardProduct';
import { info } from '../../data/infoProduct';
import { Information } from './Information';


export const Home = () => {
    return (
        <>


            <Information />



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
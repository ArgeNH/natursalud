import React from 'react'
import { devs } from '../../data/devs';
import { CardAbout } from './CardAbout';

export const About = () => {
    return (
        <>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <h2 className="text-3xl font-bold mb-12">Nosotros 🧑🏻‍💻</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
                        {
                            devs.map(dev => (
                                <CardAbout key={dev.id} {...dev} />

                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

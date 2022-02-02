import React from 'react';

export const Information = () => {
    return (
        <section className="bg-gray-200 ">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                <div className="grid grid-cols-1 gap-8 mt-2 lg:grid-cols-2">

                    <div className="relative h-64 lg:h-auto animate__animated animate__fadeIn">

                        <div className="block">
                            <img
                                className="object-cover w-full h-56 shadow-xl rounded-xl"
                                src="https://www.hyperui.dev/photos/university-1.jpeg"
                                alt=""
                            />

                            <div className="p-4">
                                <h4 className="text-xl font-bold text-gray-900 text-center">
                                    Misión
                                </h4>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                    labore natus atque, ducimus sed.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="relative h-64 lg:h-auto animate__animated animate__fadeIn">

                        <div className="block">
                            <img
                                className="object-cover w-full h-56 shadow-xl rounded-xl"
                                src="https://www.hyperui.dev/photos/university-1.jpeg"
                                alt=""
                            />

                            <div className="p-4">
                                <h4 className="text-xl font-bold text-gray-900 text-center">
                                    Visión
                                </h4>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                    labore natus atque, ducimus sed.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
import React from 'react'

export const Error404 = () => {
    return (
        <div className="text-center container mx-auto px-20">
            <img
                src="https://www.hyperui.dev/photos/confused-travolta.gif"
                alt="John Travolta confused"
                className="object-cover w-full h-100 rounded-lg"
            />

            <p className="mt-6 text-gray-500">We can&apos;t find anything, try searching again.</p>
        </div>
    )
}

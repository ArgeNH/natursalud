import React from 'react'

export const Success = () => {
  return (
    <>
      <div className='text-center container mx-auto px-20 mt-20'>
        <img
          src="https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif"
          alt="Success"
          className="object-cover w-2/4 h-2/4 rounded-lg mt-20 pt-10 mx-auto"
        />
        <h1 className='mt-6 text-green-500 text-2xl font-extrabold m-20'>Compra realizada con éxito, gracias! </h1>
      </div>
    </>
  )
}

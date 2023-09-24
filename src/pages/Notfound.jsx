import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
        <>
            <div className='bg2 w-full h-screen flex justify-center items-center'>
                <div className='w-[295px] mx-auto py-6 rounded shadow-md border border-shape bg-white'>
                    <div className='text-accent2 text-6xl text-center py-4'>
                        <i className='bi bi-patch-exclamation'></i>
                    </div>
                    <h1 className='font-shippori text-lg font-bold text-textbody text-center mt-3'>OOPS !!</h1>
                    <h1 className='font-shippori text-xl font-bold text-textbody text-center mb-3'>Page Not Found</h1>
                    <Link to="/" className='w-full block font-shippori font-bold text-accent1 drop-shadow-lg underline underline-offset-2 text-xl text-center hover:text-myorange'><i className="bi bi-chevron-left me-1 text-lg"></i>Go back</Link>
                </div>
            </div>
        </>
  )
}

export default Notfound
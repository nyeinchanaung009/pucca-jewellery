import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const CardOrder = memo(({data}) => {
    return (
        <div className='bg-white rounded-sm p-3 border border-shape mt-4 mb-4'>
            <div className='flex justify-start items-center pb-2'>
                <div className='mb-1 w-[100px] border border-emerald-600 overflow-hidden'>
                    <Link to={'/showproduct/'+data.id}><img className='w-full hover:scale-110 duration-200 hover:opacity-80' src={data.image} alt="product" /></Link>
                </div>
                <div className='font-shippori font-semibold ms-5'>
                    <Link to={'/showproduct/'+data.id}><span className='text-textpri text-sm mt-3 hover:text-myorange'>{data.name} #{data.productId}</span></Link>
                    <p className='text-textmute text-xs font-light mt-1'>{data.desc}</p>
                    <h1 className='text-textbody mt-1 font-bold'>Qty : {data.qty ? data.qty : 1}</h1>
                    <h1 className='text-textpri my-2 font-bold'>Price : {data.qty ? data.qty * data.price : data.price } MMK</h1>
                </div>
            </div>
            <div className='text-right border-t border-shape pt-2'>
                <button className='scale-90 font-shippori text-white bg-accent1 px-4 py-2 rounded-3xl hover:bg-myorange font-bold'>Order Detail</button>
            </div>
        </div>
    )
})

export default CardOrder
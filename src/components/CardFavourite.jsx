import React, { memo, useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context';

const CardFavourite = memo(({data}) => {
    const {favItems,setFavItems,addToCart} = useContext(Context);

    const removeFav = (id) => {
        let fav = [];

        fav = favItems.filter(val => val != id);
        setFavItems(fav);
        localStorage.setItem('pucca_fav',JSON.stringify(fav));
    }

  return (
    <div className='rounded-sm p-3 border border-shape mb-4'>
        <div className='flex justify-start items-center pb-2'>
            <div className='mb-1 overflow-hidden w-[100px] border border-emerald-600'>
                <Link to={'/showproduct/'+data.id}><img className='w-full hover:scale-110 duration-200 hover:opacity-80' src={data.image} alt="product" /></Link>
            </div>
            <div className='font-shippori font-semibold ms-5'>
                <h1 className='text-textpri text-sm mt-3 hover:text-myorange'><Link to={'/showproduct/'+data.id}>{data.name} #{data.productId}</Link></h1>
                <p className='text-textmute text-xs mt-1 font-light'>{data.desc}</p>
                <h1 className='text-textpri my-2 font-bold'>Price : {data.price} MMK</h1>
            </div>
        </div>
        <div className='text-right border-t border-shape pt-2'>
            <button onClick={() => removeFav(data.id)} className='scale-90 text-sm font-shippori text-white bg-teal-800 px-4 py-2 rounded-3xl hover:bg-myorange font-bold'>Remove</button>
            <button onClick={() => addToCart(data)} className='scale-90 text-sm font-shippori text-white bg-accent1 px-4 py-2 rounded-3xl hover:bg-myorange font-bold'>Add to Cart</button>
        </div>
    </div>
  )
})

export default CardFavourite
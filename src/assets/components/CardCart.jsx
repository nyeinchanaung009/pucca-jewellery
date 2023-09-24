import React, { memo, useContext } from 'react'
import Context from '../../Context'

const CardCart = memo(({data}) => {
    const {cartItems,setCartItems} = useContext(Context);

    const remove = (id) => {
        setCartItems(cartItems.filter(val => val.id != id));
    }

    const addQty = (id) => {
        const setItem = cartItems.map(val => val.id == id ? {...val,qty:val.qty+1} : val );
        setCartItems(setItem);
    }

    const reduceQty = (id,qty) => {
        if(qty > 1){
            const setItem = cartItems.map(val => val.id == id ? {...val,qty:val.qty-1} : val);
            setCartItems(setItem);
        }
    }

  return (
    <div className='bg-white rounded p-3 shadow border border-shape mb-3'>
        <div className='w-full mb-1'>
            <img className='w-[50px] border border-emerald-600' src={'.'+data.image} alt="product" />
        </div>
        <div className='font-shippori font-semibold'>
            <h1 className='text-textpri text-sm mt-1'>{data.name} #{data.productId}</h1>
            <p className='text-textmute text-xs font-light mt-1'>{data.desc}</p>
            <h1 className='text-textpri my-3 font-bold text-sm'>Price : {data.price * data.qty} MMK</h1>
            <div className='text-textpri mt-3 text-sm'>Qty : {data.qty}</div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex-1 flex justify-start items-stretch'>
                    <button onClick={() => reduceQty(data.id,data.qty)} className='px-2 bg3 text-lg text-textpri border border-shape hover:bg2'><i className="bi bi-dash"></i></button>
                    <span className='px-4 border border-shape'>{data.qty}</span>
                    <button onClick={() => addQty(data.id)} className='px-2 bg3 text-lg text-textpri border border-shape hover:bg2'><i className="bi bi-plus"></i></button>
                </div>
                <div onClick={() => remove(data.id)} className='text-center'>
                    <i className="bi bi-trash3 px-3 py-1 bg-accent1 text-white rounded-sm hover:bg-myorange cursor-pointer"></i>
                </div>
            </div>
        </div>
    </div>
  )
})

export default CardCart 
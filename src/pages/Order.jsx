import React, { useContext } from 'react'
import Master from '../layout/Master'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../Context';
import CardOrder from '../components/CardOrder';

const Order = () => {
    const navigate = useNavigate();
    const {datas,orderItems} = useContext(Context);
    
  return (
    <Master >
        <div className='min-h-[88vh] w-full flex bg2 justify-start items-center flex-col'>
            
            <div className='w-[200px] sm:w-[240px] mx-auto'>
                <img className='w-full' src="./images/ui/package2.png" alt="package" />
            </div>

            <div className='w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 my-3'>
                <div className='flex justify-between items-center'>
                    <button onClick={() => navigate(-1)} className='relative z-30'><i className="bi bi-arrow-left text-white bg-accent1 px-2 py-1 rounded shadow text-lg hover:bg-myyellow"></i></button>
                    <h1 className='flex-1 -translate-x-6 font-shippori font-semibold text-center text-textbody text-lg tracking-wide'><i className="bi bi-flower2 text-accent1 text-lg me-2"></i>ORDERS</h1>
                </div>
                <div className='p-3 mt-2 mb-2'>
                    { 
                        orderItems.map(val => (
                            <CardOrder key={val.id} data={val} />
                        ))    
                    }
                    {
                        orderItems.length <= 0 &&
                        <div className='flex justify-center items-center py-32'>
                            <h1 className='font-shippori text-neutral-400 font-bold text-xl'>-- No Order --</h1>
                        </div>
                    }
                </div>

                <hr className='mt-5' />

                <div className='mt-4 mb-12'>
                    <h1 className='flex-1 font-shippori font-semibold text-center text-textbody text-lg tracking-wide mt-5 mb-10'><i className="bi bi-clock text-accent1 text-lg me-2"></i>ORDER HISTORY</h1>
                    
                    {
                        datas.map(val => [26,36].includes(val.id) ? (
                            <CardOrder key={val.id}  data={val} />
                        ) : '' )
                    }

                </div>
            </div>  
        </div>
    </Master>
  )
}

export default Order
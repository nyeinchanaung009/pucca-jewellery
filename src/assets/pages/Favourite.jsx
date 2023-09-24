import React, { useContext } from 'react'
import Master from '../layout/Master'
import { useNavigate } from 'react-router-dom'
import Context from '../../Context';
import CardFavourite from '../components/CardFavourite';

const Favourite = () => {
    const navigate = useNavigate(-1);
    const {datas,favItems} = useContext(Context);

  return (
    <Master>
        <div className='min-h-[75vh] w-full flex justify-center items-start mt-10'>
            <div className='w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12'>
                <div className='flex justify-between items-center flex-wrap'>
                    <button onClick={() => navigate(-1)}><i className="relative z-30 bi bi-arrow-left text-lg text-white bg-accent1 px-2 py-1 rounded shadow hover:bg-myyellow"></i></button>
                    <h1 className='flex-1 -translate-x-6 font-shippori font-semibold text-center text-textbody'><i className="bi bi-heart text-accent1 me-2"></i>FAVOURITE ITEMS</h1>
                </div>
                <div className='p-3 my-8'>
                    { favItems.length > 0 &&
                        datas.filter(val => favItems.includes(val.id)).map(item => (
                            <CardFavourite key={item.id} data={item} />
                        ))
                    }
                </div>
                
                <div className='p-20 my-8'>
                    { favItems.length <= 0 &&
                    <h1 className='py-10 font-shippori text-neutral-400 font-bold text-xl text-center'>-- No Favourite Items --</h1>
                    }
                </div>
                
            </div>                
        </div>
    </Master>
  )
}

export default Favourite
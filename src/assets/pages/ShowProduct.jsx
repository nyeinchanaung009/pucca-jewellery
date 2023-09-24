import React, { useContext, useEffect, useState } from 'react'
import Master from '../layout/Master'
import { useNavigate, useParams } from 'react-router-dom'
import Context from '../../Context';
import CardProduct from '../components/CardProduct';

const ShowProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {datas,favItems,setFavItems,addToCart} = useContext(Context);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const data = datas.find(val => val.id == id);
    const similar = data && datas.filter(val => val.category == data.category && val.id != data.id).slice(0,4);

    const toggleFav = (id) => {
        let fav = [];
        favItems.includes(id) ? fav = favItems.filter(val => val != id) : fav = [id,...favItems] ;
        setFavItems(fav);
        localStorage.setItem('pucca_fav',JSON.stringify(fav));
    }
    
    window.addEventListener('click',e => {
        e.target.id == 'modaldialog' ? setIsModalOpen(false) : '' ;
    });

    useEffect(() => {
        window.scrollTo(0,0);
    },[id]);

  return (
    <>
        <Master>
            <div className='min-h-[68vh] py-4 lg:py-10 my-2 md:my-5 relative'>

                <div className='w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto relative cardbg h-full px-6 sm:px-10 py-20 md:py-9 lg:py-14  flex flex-wrap justify-between items-center ' >
                    <div className='w-full md:w-6/12'>
                        <div className='relative group w-[245px] md:w-10/12 lg:w-9/12 mx-auto border-2 border-emerald-600/60 overflow-hidden'>
                            <img className='w-full' src={'../' + data.image} alt="productImage" />
                            <div onClick={() => setIsModalOpen(true)} className='hidden absolute w-full h-full left-0 top-0 cursor-pointer bg-black/50 group-hover:flex justify-center items-center'>
                                <i className="bi bi-arrows-angle-expand text-white/70 text-3xl md:text-4xl"></i>
                            </div>
                        </div>
                    </div>  
                    <div className='w-full md:w-6/12 font-shippori font-bold mt-3 md:mt-0'>
                        <h1 className='text-xl text-textpri my-2 md:my-3'>{data.name} #{data.productId}</h1>
                        <div>
                            <h1 className='text-textbody text-sm py-1'>CATEGORY : <span className='font-bold'>{data.category.toUpperCase()}</span></h1>
                            <h1 className='text-textbody text-sm py-1'>MATERIAL : {data.material.toUpperCase()}</h1>
                            <p className='text-textbody text-sm py-1 pe-2 sm:pe-6 font-light md:pe-10 lg:pe-20'>{data.desc}</p>
                            <h1 className='md:text-lg text-textpri py-3'>Price : {data.price} MMK</h1>
                            <div className='mt-5'>
                                <button onClick={() => addToCart(data)} className='bg-accent2 text-white shadow-md text-sm py-2 border px-6 sm:px-10 hover:bg-myorange'>Add to Cart</button>
                            </div>
                        </div>
                        <div className='text-end'>
                            <button onClick={() => toggleFav(data.id)} className='mt-8 border border-black/20 cardbg px-3 py-2'><i style={{filter:'drop-shadow(-1px 1px rgba(0,0,0,0.2))'}} className={favItems.includes(data.id) ? 'bi bi-heart-fill text-emerald-600 hover:text-myorange' : "bi bi-heart text-textbody hover:text-myorange"}></i></button>
                        </div>
                    </div>
                    <div className='absolute left-3 top-6'>
                        <button onClick={() => navigate(-1)} className='bg-accent1 text-white px-3 py-2 rounded shadow hover:bg-myorange'><i className="bi bi-arrow-left"></i></button>
                    </div>
                </div>

                <div className='w-11/12 sm:w-10/12 mx-auto'>
                    <h1 className='w-11/12 sm:w-[9/12] mx-auto font-shippori font-bold text-textpri text-xl mt-10 mb-10 text-center'>Similar Items</h1>
                    <div className=' flex justify-center items-center flex-wrap'>
                        {
                            similar.map(val => (
                                <CardProduct key={val.id} data={val} wid='w-6/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px]' />
                            ))
                        }
                    </div>
                </div>

                {/* ============================== image modal ==================================== */}
                {isModalOpen && (
                    <div className='fixed left-0 top-0 w-full h-full bg-black/80 z-50'>
                        <div className='text-end pe-5 sm:pe-7 pt-2 sm:pt-5'>
                            <button onClick={() => setIsModalOpen(false)} className='text-xl md:text-2xl lg:text-3xl p-2 px-3 rounded-full bg-black/20 hover:bg-black/40 text-white'><i className="bi bi-x-lg"></i></button>
                        </div>
                        <div id='modaldialog' className='h-full flex justify-center items-center'>
                            <div className='w-[92%] sm:w-[420px] md:w-[620px] lg:w-[900px] mx-auto'>
                                <img className='w--full saturate-150' src={'../' + data.image} alt="product" />
                            </div>
                        </div>
                    </div>
                )}
                

            </div>
        </Master>
    </>
  )
}

export default ShowProduct
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../Context'

const CardProduct = ({wid,data}) => {

    const {favItems,setFavItems,addToCart} = useContext(Context);

    const toggleFav = (id) => {
        let fav = [];
        favItems.includes(id) ? fav = favItems.filter(val => val != id) : fav = [id,...favItems] ;
        setFavItems(fav);
        localStorage.setItem('pucca_fav',JSON.stringify(fav));
    }

  return (             
    <>                      
        <div className={wid + ' mb-12 font-shippori font-semibold text-center'} >
            <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
                <div className='group w-fit overflow-hidden'>
                    <Link to={'/showproduct/'+data.id}><img className='md:w-[85%] md:py-1 mx-auto group-hover:scale-105 opacity-100 group-hover:opacity-70 duration-300 border-2 border-emerald-800/50 shadow-lg' src={'../' + data.image} alt="category" /></Link>
                </div>
                <div className='px-3'>
                    <h1 className='text-textpri sm:text-[16px] font-semibold mt-2 mb-2 hover:text-myorange'><Link to={'/showproduct/'+data.id}>{data.name} #{data.productId}</Link></h1>
                    <p className='min-h-[60px] sm:min-h-[35px] text-textbody font-light my-1 text-xs sm:text-[13px] leading-5'>{data.desc}</p>
                    <h1 className='text-texpri text-sm font-black my-2'>{data.price} MMK</h1>
                </div>
                <div className='flex justify-between items-center sm:px-1 pb-4 pt-1'>
                    <div className='flex-1 '>
                        <button title='Add to Cart' onClick={() => addToCart(data)} className='bg-accent2 px-1 sm:px-4 text-xs py-2 text-white shadow-md hover:bg-myorange'>ADD TO CART</button>
                    </div>
                    <button title='Add to Favourite Items' onClick={() => toggleFav(data.id)} className='md:-translate-x-2 lg:-translate-x-5'><i style={{filter:'drop-shadow(-1px 1px rgba(0,0,0,0.2))'}} className={favItems.includes(data.id) ? "bi bi-heart-fill text-emerald-600 hover:text-myorange" : "bi bi-heart text-accent1 hover:text-myorange"}></i></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardProduct
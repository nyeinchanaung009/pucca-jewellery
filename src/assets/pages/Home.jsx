import React, { useContext } from 'react'
import Master from '../layout/Master'
import CardProduct from '../components/CardProduct'
import Slogan from '../components/Slogan'
import Contactbox from '../components/Contactbox'
import Categories from '../components/Categories'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import Context from '../../Context.js'



const Home = () => {

   const {datas} = useContext(Context); 
   
  return (
    <>
        <Master>
            <div style={{overflow:'hidden'}} >


                {/* =========================================== hero section ============================================ */}
                <header>
                    <div className='relative min-h-[90vh] bg1 flex justify-center items-center flex-wrap py-10 md:py-16 mb-6'>
                        <div className='w-full sm:w-7/12 lg:w-6/12 order-2 sm:order-1 mt-7 sm:mt-0 pb-14'>
                            <div className='w-fit mx-auto sm:float-right font-shippori p-3 ps-4 sm:ps-12 '>
                                <h1 className='inline text-3xl md:text-5xl font-shippori text-textpri opacity-95 leading-5 tracking-[2px]'>PUCCA</h1>
                                <h1 className='text-2xl md:text-[28px] py-1 font-shippori text-textori opacity-95 leading-5 pb-4'>Goldsmith & Jewellery</h1>
                                <p className='font-medium text-textbody text-base md:text-lg py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Impedit, est veniam asperiores!</p>
                                <Link to='/products' className='inline-block bg-accent2 font-semibold px-8 py-1 text-white me-8 mt-3 shadow-sm hover:bg-myorange'>SHOP NOW</Link>
                                <button className='hover:opacity-75'><Link to="products">See more<i className="bi bi-arrow-right ms-2 "></i></Link></button>
                            </div>
                        </div>
                        <div className='relative w-11/12 sm:w-5/12 lg:w-6/12 order-1 sm:order-2 z-10 overflow-hidden'>
                            <img className='rotate-2 w-10/12 min-[450px]:w-7/12 min-[640px]:w-11/12 md:w-10/12 lg:w-7/12 xl:w-[443px] drop-shadow-md mx-auto xl:ml-16' src="src\assets\images\ui\hero1.png" alt="main img" />
                        </div>

                        <div className='absolute w-full -bottom-12 md:-bottom-18'>
                            <img className='w-[80px] sm:w-[100px] md:w-[125px] mx-auto opacity-95 drop-shadow-md' src="./src/assets/images/ui/img14.png" alt="" />
                        </div>
                    </div>
                </header>


                <section className='min-h-[70vh] bg-white'>

                    {/* =========================================== product cards ============================================ */}
                    <div className=''>
                        <div className='w-11/12 md:w-9/12 mx-auto flex justify-between items-center px-2 mt-20 sm:mt-12 sm:pb-4'>
                            <h1 className='text-sm md:text-xl font-bold font-shippori text-textpri tracking-wide '>NEW PRODUCTS</h1>
                            <Link to="/products" className='text-sm font-medium font-shippori text-textbody hover:opacity-80'>VIEW ALL<i className="bi bi-chevron-right ms-1"></i></Link>
                        </div>

                        <div className='md:w-full mx-auto pb-4 pt-6 sm:pt-10'>
                            <div className='w-11/12 sm:w-10/12 cursor-pointer mx-auto'>
                                <Swiper
                                    modules={[Autoplay, Pagination, A11y]}
                                    autoplay={{
                                        delay: 2100,
                                        disableOnInteraction: false,
                                    }}
                                    freeMode={true}
                                    pagination={{ clickable: true }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    breakpoints={{
                                        '@0.00': {
                                          slidesPerView: 1,
                                          spaceBetween: 10,
                                        },
                                        '@0.75': {
                                          slidesPerView: 2,
                                          spaceBetween: 10,
                                        },
                                        '@1.10': {
                                          slidesPerView: 3,
                                          spaceBetween: 10,
                                        },
                                        '@1.50': {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        },
                                      }}
                                >
                                    {
                                        datas.slice(-8).map(val => (
                                            <SwiperSlide key={val.id}><CardProduct data={val} wid='w-8/12 sm:w-11/12 mx-auto' /></SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                        
                    </div>
                </section>

                {/* ===========================================  divider  ============================================ */}
                <div className='py-16'>
                    <div className='relative w-[240px] sm:w-[300px] md:w-[350px] mx-auto'>
                        <div className='w-full absolute bottom-1'>
                            <img style={{transform:'rotateX(180deg) scaleX(1.1)'}}  className='w-5/12 mx-auto opacity-20' src="./src/assets/images/ui/foot1.png" alt="divider2" />
                        </div>
                        <img className='opacity-20' src="./src/assets/images/ui/foot2.png" alt="divider" />
                    </div>
                </div>

                {/* =========================================== information section  ============================================ */}
                <section className='min-h-[78vh] bg2 relative'>
                    <div className='min-h-[78vh] flex justify-center items-center flex-wrap py-10 md:py-5'>
                        <div className='w-full sm:w-5/12 md:w-6/12 relative z-10'>
                            <img className='w-10/12 min-[450px]:w-7/12 min-[640px]:w-10/12  md:w-9/12 lg:w-7/12 xl:w-[443px] drop-shadow-sm mx-auto sm:scale-110 md:scale-100' src="src\assets\images\ui\hero2.png" alt="main img" />
                        </div>
                        <div className='w-full sm:w-7/12 md:w-5/12 lg:w-5/12'>
                            <div className='w-fit font-shippori p-3 mx-auto ps-5 md:ps-0 lg:-ms-10'>
                                <h1 className='font-black text-textpri text-2xl md:text-3xl py-2'>The Lorem Ipsum Dolor</h1>
                                <p className='font-medium text-textbody text-base md:text-lg py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Impedit, est veniam asperiores!</p>
                                <button className='bg-accent2 px-8 py-1 text-white me-8 mt-3 shadow-sm hover:bg-myorange'><Link to='/products'>Buy Now</Link></button>
                                <button className='hover:opacity-75'><Link to='/products'>Learn more<i className="bi bi-arrow-right ms-2 "></i></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -right-0 -top-10 w-[75px] min-[405px]:w-[105px] min-[405px]:-right-3 md:w-[125px] md:-right-5 md:-top-16 lg:w-[195px] lg:-right-11 lg:-top-24 translate-x-6'><img src="./src/assets/images/ui/diamond 2.png" alt="" /></div>
                </section>

                {/* =========================================== slogan  ============================================ */}
                <Slogan/>


                {/* =========================================== contact  ============================================ */}
                <Contactbox/>

            </div>
        </Master>
    </>
  )
}

export default Home
import React, { useContext } from 'react'
import Master from '../layout/Master'
import CardProduct from '../components/CardProduct'
import Context from '../Context'

const Events = () => {

    const {datas} = useContext(Context);
  return (
    <>
      <Master>
        {/* ================================================ banner ========================================= */}
        <section className=''>
        {/* className='h-[450px] bg-fixed bg-no-repeat bg-cover bg-right-top md:bg-right-bottom' style={{backgroundImage: "url('./src/assets/images/products/banner3.jpg')"}} */}
            <div className='h-[68vh]'>
                <img className='w-full h-full object-cover object-right' src="./images/ui/banner2.jpg" alt="banner" />
            </div>

            <h1 className='font-shippori font-semibold text-textpri tracking-widest text-2xl text-center mt-14 mb-8'>Events</h1>
            
            <hr className='text-shape'/><br />

            {/* ==================================== chinese new year event ================================================= */}
            <div className='w-11/12 md:w-10/12 mx-auto my-6 md:my-16 '>
                <div style={{background:'#db1c01'}} className='md:w-9/12 mx-auto py-7 rounded shadow'>
                    <div className='w-[285px] md:w-[400px] mx-auto'>
                        <img className='w-full' src="./images/ui/img7.jpg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-start mt-8 flex-wrap'>

                    {datas.map(val => [2,36,41,45].includes(val.id) ? (
                        <CardProduct key={val.id} data={val} wid='w-6/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px]' />
                    ) : '' 
                    )}

                </div>
            </div>

            <hr className='text-shape'/><br />

            {/* ==================================== christmas event ================================================= */}
            <div className='w-11/12 md:w-10/12 mx-auto my-6 md:my-12'>
                <div style={{background:'#f8dda4'}} className='md:w-9/12 mx-auto py-7 rounded shadow'>
                    <div className='w-[285px] md:w-[400px] mx-auto'>
                        <img className='w-full' src="./images/ui/img5.jpg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-start mt-8 flex-wrap'>

                    <div className='w-11/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px] mx-auto mb-8 font-shippori font-semibold text-center'>
                        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
                            <div className='group w-fit overflow-hidden'>
                                <img className='md:w-[85%] md:py-1 mx-auto group-hover:scale-110 group-hover:opacity-80 duration-200' src="./images/ui/img6.jpg" alt="category" />
                            </div>
                        </div>
                    </div>
                    
                    {datas.map(val => [1,16,11].includes(val.id) ? (
                        <CardProduct key={val.id} data={val} wid='w-6/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px]' />
                    ) : '' 
                    )}

                </div>
            </div>

            <hr className='text-shape'/><br />

            {/* ==================================== other event ================================================= */}
            <div className='w-11/12 md:w-9/12 mx-auto mb-28'>
                <div style={{background:'#113535'}} className='md:w-9/12 mx-auto py-7 rounded shadow'>
                    <div className='w-[285px] md:w-[400px] mx-auto'>
                        <img className='w-full' src="./images/ui/img12.jpg" alt="" />
                    </div>
                </div>

                <div className='mt-8 flex justify-center items-center flex-wrap'>

                    <div className='w-11/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px] mb-8 font-shippori font-semibold text-center'>
                        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
                            <div className='group w-fit overflow-hidden'>
                                <img className='md:w-[85%] md:py-1 mx-auto group-hover:scale-110 group-hover:opacity-80 duration-200' src="./images/ui/img13.jpg" alt="category" />
                            </div>
                        </div>
                    </div>

                    <div className='w-11/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px] mb-8 font-shippori font-semibold text-center'>
                        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
                            <div className='group w-fit overflow-hidden'>
                                <img className='md:w-[85%] md:py-1 mx-auto group-hover:scale-110 group-hover:opacity-80 duration-200' src="./images/ui/img14.jpg" alt="category" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
      </Master>
    </> 
  )
}

export default Events
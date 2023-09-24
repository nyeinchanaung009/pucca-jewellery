import React, { memo } from 'react'

const Contactbox = memo(() => {
  return (
    <div className='w-10/12 mx-auto bg-white pt-6 pb-12 md:pt-12 md:pb-24 text-textpri'>
        <h1 className='font-shippori text-center font-extrabold tracking-widest text-textpri text-xl py-12'>CONTACT US</h1>
        <div className='flex flex-wrap justify-evenly items-center '>
            <div className='w-11/12 sm:w-6/12 md:w-3/12 text-center mb-10 md:mb-0'>
                <span className='text-[33px]'><i className="bi bi-telephone"></i></span>
                <h1 className='text-textpri font-shippori font-black text-xl mt-3'>Call Us</h1>
                <p className='font-shippori font-medium mt-2'>01 838 3556 , 01 838 3541</p>
                <p className='font-shippori font-medium'>+959 965 117073</p>
            </div>
            <div className='w-11/12 sm:w-6/12 md:w-3/12 text-center mb-10 md:mb-0'>
                <span className='text-[33px]'><i className="bi bi-geo-alt"></i></span>
                <h1 className='text-textpri font-shippori font-black text-xl mt-3'>Location</h1>
                <p className='font-shippori font-medium mt-2'>အမှတ်(၆၉၇)၊ မဟာဗန္ဓုူလလမ်းနှင့် စဉ့်အိုးတန်း<br />လမ်းထောင့်၊ လသာမြို့နယ်၊ ရန်ကုန်မြို့။,</p>                    
            </div>
            <div className='w-11/12 sm:w-6/12 md:w-3/12 text-center mb-10 md:mb-0'>
                <span className='text-[33px]'><i className="bi bi-envelope-paper"></i></span>
                <h1 className='text-textpri font-shippori font-black text-xl mt-3'>Email</h1>
                <p className='font-shippori font-medium mt-2'>Send Email to :</p>
                <p className='font-shippori font-medium'>pucca@gmail.com</p>
            </div>
        </div>
        
    </div>
  )
})

export default Contactbox
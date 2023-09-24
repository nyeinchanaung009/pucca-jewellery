import React, { memo } from 'react'

const Slogan = memo(() => {
  return (
    <>
        <div className='h-[500px] bg-fixed bg-no-repeat bg-cover' style={{backgroundImage: "url('./images/ui/banner4.jpg')"}}>
            <div className='relative flex justify-center items-center h-full bg-zinc-800/50 backdrop-blur-[3px]'>
                <div>
                    <div className='text-white font-shippori italic text-base md:text-2xl flex items-center font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 sm:me-2' style={{fill:'#ffffff'}}  viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                        <span> ရွှေရည်ပြည့်ဝ ရွှေရောင်မကျ ပတ်ကားမှာသာ စိတ်ချရ </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 sm:ms-2 -translate-y-1' style={{fill:'#ffffff'}} viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
                    </div>
                    <h1 className='text-white/90 font-shippori text-sm text-center pt-8'>- PUCCA GOLDSMITH & JEWELLERY -</h1>
                </div>
                <div className='absolute bottom-10 left-0 text-center w-full'><p className='font-shippori font-base text-sm text-white/90'>( Since 1984 )</p></div>
            </div>
        </div>
    </>
  )
})

export default Slogan
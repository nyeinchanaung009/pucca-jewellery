import React, { memo } from 'react'

const Categories = memo(({filterSearch}) => {
  return (
    <div className='w-11/12 sm:w-10/12 h-full mx-auto flex flex-wrap justify-center items-center'>
                            
        <div onClick={() => filterSearch('category','necklace')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/pearl-necklace01.png" alt="necklace" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.65]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>ဆွဲကြိုး</h1>
        </div>

        <div onClick={() => filterSearch('category','earrings')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/earrings.png" alt="earrings" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>နားကပ်</h1>
        </div>

        <div onClick={() => filterSearch('category','bracelet')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/bracelet (1).png" alt="bracelet" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>လက်ကောက်</h1>
        </div>

        <div onClick={() => filterSearch('category','locket')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/necklace.png" alt="locket" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>ဆွဲသီး</h1>
        </div>

        <div onClick={() => filterSearch('category','ring')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/ring.png" alt="ring" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>လက်စွပ်</h1>
        </div>

        <div onClick={() => filterSearch('category','bayet')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/necklace (1).png" alt="necklace" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>လည်ဘယက်</h1>
        </div>

        <div onClick={() => filterSearch('category','hand chain')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/bracelet (2).png" alt="handchain" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.6]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>ဟန်းချိန်း</h1>
        </div>

        <div onClick={() => filterSearch('category','wedding ring')}  className='w-4/12 md:w-3/12 lg:w-2/12 mb-6 '>
            <div className='w-11/12 sm:w-9/12 md:w-8/12 mx-auto cardbg py-8 border border-shape group cursor-pointer duration-100'>
                <img className='w-[40px] sm:w-[56px] mx-auto opacity-[0.64] group-hover:scale-[1.15] duration-300' src="./images/ui/wedding-rings.png" alt="wedding ring" />
            </div>
            <div className='-mt-1'>
                <img className='w-6/12 mx-auto opacity-[0.68]' src="./src/assets/images/ui/foot1.png" alt="" />
            </div>
            <h1 className='text-textbody font-semibold text-center text-xs sm:text-sm mt-2'>လက်ထပ်လက်စွပ်</h1>
        </div>

    </div>
  )
})

export default Categories
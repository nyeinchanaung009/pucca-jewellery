import { memo } from 'react'
import { Link } from 'react-router-dom'

const Footer = memo(() => {

  return (
    <>
        <div className='text-center text-black/30 text-clip overflow-hidden mb-16'>
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </div>

        <footer className='lg:w-11/12 mx-auto bg3 pt-10 border-t relative'>
            <div className='flex justify-evenly items-start flex-wrap'>
            
                <div className='text-start w-11/12 min-[520px]:w-6/12 sm:w-4/12 md:w-3/12 mx-auto mb-10 md:mb-0 font-shippori text-sec'>
                    <div className='w-fit mx-auto'>
                        <h1 className='text-base font-black text-textpri'>CUSTOMER SERVICE</h1>
                        <div className='mt-4 font-bold text-textbody tracking-wide text-[15px]'>
                            <a href="#" className='block hover:text-textpri'>Help & Contact Us</a>
                            <a href="#" className='block hover:text-textpri'>Return & Refund</a>
                            <a href="#" className='block hover:text-textpri'>Terms & Conditions</a>
                            <a href="#" className='block hover:text-textpri'>FAQS</a>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 min-[520px]:w-6/12 sm:w-4/12 md:w-3/12 mx-auto mb-10 md:mb-0 text-start font-shippori text-sec'>
                    <div className='w-fit mx-auto'>
                        <h1 className='text-base font-black text-textpri'>SOCIAL MEDIA</h1>
                        <div className='mt-4 font-bold text-textbody tracking-wide text-[15px]'>
                            <a href="https://www.facebook.com/puccagold.jewel/" target='_blank' className='block hover:text-textpri'><i className="bi bi-facebook text-textbody me-2"></i>Facebook</a>
                            <a href="#" className='block hover:text-textpri'><i className="bi bi-twitter text-textbody me-2"></i>Twitter /  &#x1D54F; </a>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 min-[520px]:w-6/12 sm:w-4/12 md:w-3/12 mx-auto mb-10 md:mb-0 text-start font-shippori text-sec'>
                    <div className=''>
                        <h1 className='text-base font-black text-textpri text-center'>QUICK LINK</h1>
                        <div className='w-[80%] mx-auto mt-4 font-bold text-textbody tracking-wide text-[15px] px-5 sm:px-10'>
                            <Link to="/" className='flex justify-around items-center border-y border-textmute hover:bg1 hover:text-textpri'>
                                <i className="bi bi-chevron-right ps-3"></i><span className='flex-1 text-center block pe-5 py-1'>Home</span>
                            </Link>
                            <Link to="/products" className='flex justify-around items-center border-b border-textmute hover:bg1 hover:text-textpri'>
                                <i className="bi bi-chevron-right ps-3"></i><span className='flex-1 text-center block pe-5 py-1'>Products</span>
                            </Link>
                            <Link to="/events" className='flex justify-around items-center border-b border-textmute hover:bg1 hover:text-textpri'>
                                <i className="bi bi-chevron-right ps-3"></i><span className='flex-1 text-center block pe-5 py-1'>Events</span>
                            </Link>
                            <Link to="/about" className='flex justify-around items-center border-b border-textmute hover:bg1 hover:text-textpri'>
                                <i className="bi bi-chevron-right ps-3"></i><span className='flex-1 text-center block pe-5 py-1'>About</span>
                            </Link>
                            <Link to="/contact" className='flex justify-around items-center border-b border-textmute hover:bg1 hover:text-textpri'>
                                <i className="bi bi-chevron-right ps-3"></i><span className='flex-1 text-center block pe-5 py-1'>Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 min-[520px]:w-6/12 sm:w-4/12 md:w-3/12 mx-auto mb-10 md:mb-0 text-start font-shippori text-sec'>
                    <div className='w-fit mx-auto'>
                        <h1 className='text-base font-black text-textpri'>PROFILE</h1>
                        <div className='mt-4 font-bold text-textbody tracking-wide text-[15px]'>
                            <a href="#" className='block hover:text-textpri'>My Account</a>
                            <a href="#" className='block hover:text-textpri'>My Order</a>
                            <a href="#" className='block hover:text-textpri'>Logout</a>
                            <a href="#" className='block hover:text-textpri'>Help</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center font-shippori text-text-body font-bold pt-10 pb-2 text-[13px]'>
                <p>Pucca Goldsmith & Jewellery. Copyright &copy; {new Date().getFullYear()}. All right reserve.</p>
                <p className='font-sans font-light text-sm mt-1'>Developed by <a href="https://github.com/nyeinchanaung009" target='_blank' className='hover:text-myorange hover:underline'><i className="bi bi-github mx-2"></i>Nyein Chan Aung</a></p>
            </div>

            <div className='absolute w-full left-0 -top-5 text-center'>
                <img style={{transform:'rotateX(180deg) scaleX(1.1)'}} className='w-[130px] opacity-50 inline'  src="../src/assets/images/ui/foot1.png" alt="pattern" />
            </div>
        </footer>
    </>
    
  )
})

export default Footer
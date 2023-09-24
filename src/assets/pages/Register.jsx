import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
      <div className='bg-accent1 relative w-full min-h-screen flex justify-between items-center flex-wrap'>
          <div className='absolute w-[30px] md:w-[40px] left-6 md:left-10 top-6'>
              <img className='w-full' src="./src/assets/images/ui/favicon white.png" alt="" />
          </div>
          <div className='absolute left-16 md:left-24 top-9 z-40'>
              <p className='font-shippori text-white font-semibold text-xs'><Link to="/" className='underline underline-offset-2 hover:text-myorange'>Home</Link> / Register</p>
          </div>

          <div className='w-[285px] mx-auto md:w-4/12 mt-6 ms:mt-0'>
              <div className='relative z-10'>
                  <img className='w-full scale-110 md:scale-[1.5]' src="./src/assets/images/ui/paper Bag002.png" alt="package" />
                  <div className='absolute top-3 -left-3 md:-left-5 -z-[1] w-full h-full flex justify-center items-center'>
                      <div className='w-[50%] h-[70%] md:w-[70%] py-2 rounded-full cardbg md:h-[100%] opacity-20 scale-110'></div>
                  </div>
              </div>
          </div>

          <div className='h-full w-full md:w-8/12 flex justify-center md:items-start items-center flex-col mt-12 md:mt-8'>
              <div className='w-11/12 bg-white relative px-3 sm:px-5 py-8 rounded shadow border border-shape'>
                  <h1 className='font-shippori font-black tracking-widest text-accent2 text-center text-2xl'>REGISTER</h1>
                  <p className='font-shippori font-bold tracking-wide text-textsec text-center text-sm my-3'>Welcome to PUCCA Goldsmith & Jewellery</p>
                  
                  <div className='flex flex-wrap justify-center md:justify-between items-start mt-8'>
                      <div className='w-full sm:w-10/12 md:w-6/12 px-2 md:px-2 lg:px-9'>
                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Name</label>
                              <div className='flex justify-between items-stretch'>
                                  <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Name' />
                              </div>
                          </div>

                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Email</label>
                              <div className='flex justify-between items-stretch'>
                                  <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Email' />
                              </div>
                          </div>

                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Phone</label>
                              <div className='flex justify-between items-stretch'>
                                  <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Phone' />
                              </div>
                          </div>
                      </div>

                      <div className='w-full sm:w-10/12 md:w-6/12 px-2 md:px-2 lg:px-9'>
                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Password</label>
                              <div className='flex justify-between items-stretch'>
                                  <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Password' />
                              </div>
                          </div>

                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Confirm password</label>
                              <div className='flex justify-between items-stretch'>
                                  <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Confirm password' />
                              </div>
                          </div>

                          <div className='mb-3 md:mb-5'>
                              <label className='block mb-1 text-sm font-shippori text-textbody' htmlFor="Email">Address</label>
                              <div className='flex justify-between items-stretch'>
                                  <textarea type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' rows="4" placeholder='Address' ></textarea>
                              </div>
                          </div>

                          <div className='font-shippori text-xs text-textsec ps-2'>
                                <input type="checkbox" className='accent-accent1 me-1 scale-110' />Accept <button className='text-accent2 underline underline-offset-2 hover:text-myyellow'>Terms & Conditions</button>.
                          </div>
                      </div>
                  </div>

                  

                  <div className='text-center pt-6'>
                        <Link to="/" className='block w-11/12 mx-auto sm:w-[265px] font-shippori font-black text-white bg-accent1 rounded shadow py-2 tracking-widest hover:bg-myorange'>REGISTER</Link>
                  </div>
              
                  <div className='absolute w-full left-0 -top-6 text-center'>
                      <img className='inline w-[150px] opacity-50' style={{transform:'rotateX(180deg)'}} src="./src/assets/images/ui/foot1.png" alt="" />
                  </div>
              </div>
              <div className='pb-8 md:pb-0 self-center'>
                <h1 className='font-shippori font-semibold text-sm text-white mt-1'>Already have an account? <Link className='text-textbody font-bold hover:underline underline-offset-2 hover:text-myorange ms-1' to='/login'> Login</Link></h1>
            </div>
          </div>  

      </div>
  )
}

export default Register
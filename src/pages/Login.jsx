import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [eyeOpen,setEyeOpen] = useState(false);

  return (
    <div className='bg-neutral-100 relative min-h-screen'>
        <div className='absolute w-[30px] md:w-[40px] left-6 md:left-10 top-6'>
            <img className='w-full' src="./images/ui/favicon.png" alt="icon" />
        </div>
        <div className='absolute left-16 md:left-24 top-9 z-40'>
            <p className='font-shippori text-textbody font-semibold text-xs'><Link to="/" className='hover:underline underline-offset-2 text-accent1 hover:text-myorange'>Home</Link> / Login</p>
        </div>


        <div className='h-screen flex justify-between items-start md:items-center flex-wrap'>

            <div className=' relative w-full md:w-6/12 mx-auto mt-14 md:mt-0'>
                <div className='w-[200px] sm:w-4/12 md:w-9/12 lg:w-7/12 mx-auto'>
                    <img className='w-full' src="./images/ui/package1.png" alt="paper bag" />
                </div>
            </div>

            <div className=' w-full md:h-full py-10 md:py-0 md:w-6/12 mx-auto flex justify-start items-center'>
                <div className='w-full'>
                    <div className='relative bg-white w-11/12 sm:w-8/12 md:w-11/12 lg:w-[432px] mx-auto md:mx-0 p-3 sm:p-8 shadow'>
                        
                        <h1 className='font-shippori font-bold text-accent1 text-center text-xl my-2 tracking-widest'>LOGIN</h1>
                        <p className='font-shippori text-sm text-textmute text-center mb-5'>Login To Your Account</p>
                        
                        <div className='mb-3'>
                            <label className='block mb-1 font-shippori text-textbody' htmlFor="Email">Email</label>
                            <div className='flex justify-between items-stretch'>
                                <input type="text" className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Email' />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className='block mb-1 font-shippori text-textbody' htmlFor="Email">Password</label>
                            <div className='relative flex justify-between items-stretch'>
                                <input type={eyeOpen ? "text" : 'password'} className='font-shippori text-sm rounded w-full p-2 outline-none border-2 focus:border-accent1' placeholder='Password' />
                                <button onClick={() => setEyeOpen(pre => !pre)} className='absolute top-1 right-2 rounded text-textmute hover:text-textsec hover:bg2 px-2 py-1'><i className={eyeOpen? "bi bi-eye" : "bi bi-eye-slash"}></i></button>
                            </div>
                            <p className='inline text-xs mt-1 text-textbody font-shippori hover:text-textpri hover:underline cursor-pointer'>Forget Password ?</p>
                        </div>

                        <div className='font-shippori text-textbody text-sm mt-4'>
                            <input className='scale-125 accent-accent1 me-2' type="checkbox" />Remember Me
                        </div>

                        <Link to="/" className='w-full block text-center bg-accent1 py-2 text-white font-shippori mt-4 mb-3 shadow font-bold hover:bg-myorange rounded-3xl'>LOGIN</Link>

                        <div className="w-full absolute -top-5 right-0 text-center">
                            <img className='inline w-[150px] opacity-30' style={{transform:'rotateX(180deg)'}} src="./images/ui/foot1.png" alt="ui" />
                        </div>
                    </div>
                    <p className='font-shippori text-textbody text-center md:text-start text-sm mt-1 ms-4'>Don't have an account? <Link to="/register" className='text-accent1 font-bold hover:text-myorange hover:underline'>Register</Link> here.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login
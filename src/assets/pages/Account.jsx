import React from 'react'
import Master from '../layout/Master'
import { useNavigate } from 'react-router-dom';

const Account = () => {
const navigate = useNavigate();

  return (
    <Master>
        <div className='cardbg min-h-[68vh] flex justify-center items-start pt-20 pb-10'>
            <div className='relative w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 rounded-lg shadow p-4 bg-white'>
                <h1 className='font-shippori font-semibold text-textbody text-center pb-4'><i className="bi bi-person-circle text-accent1 text-xl me-2"></i>ACCOUNT</h1>
                <div className='bg-accent2 rounded'>
                    <div className='flex justify-center items-center flex-col py-4'>
                        <div className='group relative w-[75px] h-[75px] rounded-full bg1 flex justify-center items-center overflow-hidden shadow-md'>
                            <img className='object-cover w-full h-full' src="https://nordot-res.cloudinary.com/c_limit,w_800,f_auto,q_auto:eco/ch/images/1055490703937389354/origin_1.jpg" alt="" />
                            <span className='hidden group-hover:block w-full h-full absolute left-0 top-0 text-center bg-black/40 pt-6 text-white'><i className="bi bi-pencil"></i></span>
                        </div>
                        <h1 className='font-shippori font-semibold text-white text-lg mt-1'>Yua Mikami <button><i className="bi bi-pencil-square ms-1 hover:text-myorange"></i></button></h1>
                    </div>
                </div>
                
                <div className='p-1 md:p-3 lg:p-4 mt-5 font-shippori font-semibold text-textbody rounded'>
                    <div className='mb-3'>
                        <button className='bg-teal-700 text-white w-full py-2 rounded shadow hover:bg-myorange'>Change Password <i className="bi bi-arrow-right ms-2"></i></button>
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2 block' htmlFor="email">Email</label>
                        <input onChange={(e) => e} className='w-full bg-white p-2 border-2 outline-none hover:border-accent1 rounded' value='yuamikami@gmail.com' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2 block' htmlFor="phone">Phone</label>
                        <input onChange={(e) => e} className='w-full bg-white p-2 border-2 outline-none hover:border-accent1 rounded' value='+81 0001 03100' type="text" />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2 block' htmlFor="address">Address</label>
                        <textarea onChange={(e) => e} className='w-full bg-white p-2 border-2 outline-none hover:border-accent1 rounded' rows='3' value=' Nagoya, Aichi, Japan' type="text" ></textarea>
                    </div>
                    <div className='mb-3'>
                        <button className='bg-accent1 text-white w-full py-2 rounded shadow hover:bg-myorange'>Save Changes</button>
                    </div>
                </div>

                <div className='absolute left-0 -top-14'>
                    <button onClick={() => navigate(-1)}><i className="bi bi-arrow-left text-lg px-3 py-1 text-white bg-accent1 rounded shadow hover:bg-myyellow"></i></button>
                </div>
            </div>
        </div>
    </Master>
  )
}

export default Account
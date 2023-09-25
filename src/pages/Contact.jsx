import React, { useState } from 'react'
import Master from '../layout/Master'
import Contactbox from '../components/Contactbox'

const Contact = () => {

    const [isOpenModal,setIsOpenModal] = useState(false);
    const [curImage,setCurImage] = useState(1);

    const openModal = (image) => {
        setCurImage(image);
        setIsOpenModal(true);
    }

    const prevImg = () => {
        curImage > 1 ? setCurImage(pre => pre - 1) : setCurImage(3) ;
    }

    const nextImg = () => {
        curImage < 3 ? setCurImage(pre => pre + 1) : setCurImage(1) ;
    }

    window.addEventListener('click', e => {
        e.target.id == 'modaldialog' ? setIsOpenModal(false) : '' ;
    });

  return (
    <Master>
        <div>
            <div className='bg-myslategrey p-4 md:p-8 border-b-[10px] border-slate-900/70'>
                <div className='bg1 py-6 innershadow'>
                    <div className='bg-accent3 w-11/12 md:w-9/12 lg:w-7/12 mx-auto text-center py-16 shadow-xl shadow-slate-600/60 border-b-4 border-slate-700/50'> 
                        <h1 className='textshadow font-ponenyet text-myyellow text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide'>ပတ်ကား</h1>
                        <p style={{WebkitTextStroke: '0.5px #76767655'}} className='textshadow text-white tracking-wide font-extrabold text-[28px]'>စိန်‌ရွှေရတနာဆိုင်</p>
                    </div>
                </div>
            </div>
            <div className='py-5 md:py-7 bg-myslategrey border-b-[6px] border-slate-900/70'></div>
            <div className='bg-slate-800/80 text-center py-2 sm:py-1'>
                <span className='textshadow font-pucca text-3xl md:text-[40px] tracking-widest text-myorange me-2 md:me-3'>PUCCA</span>
                <span  className='textshadow font-gsfont tracking-wide text-white text-xl md:text-2xl'>Goldsmith <span className='px-1'>&</span> Jewellery</span>
            </div>
        </div>

        <div className='bg-white py-20'>
            <div className='mb-12'>
                <div className='text-center mb-8'><i className="bi bi-shop border-2 border-textbody text-xl rounded-full text-textbody px-3 py-2"></i></div>
                <h1 className='font-shippori font-bold text-lg text-textbody text-center my-3'>SHOP 1 <span className='font-normal'>( မြို့လယ်ဆိုင်ခွဲ )</span></h1>
                <p className='text-textbody font-base text-center'>အမှတ်(၆၉၇)၊ မဟာဗန္ဓုလလမ်းနှင့် စဉ့်အိုးတန်းလမ်းထောင့်၊ လသာမြို့နယ်၊ ရန်ကုန်မြို့။</p>
                <p className='text-textbody font-base text-center mt-1'>&#9743; 01 838 3541, 01 838 3556</p>
            </div>

            <div className=''>
                <div className='text-center mb-8'><i className="bi bi-shop border-2 border-textbody text-xl rounded-full text-textbody px-3 py-2"></i></div>
                <h1 className='font-shippori font-bold text-lg text-textbody text-center my-3'>SHOP 2 <span className='font-normal'>( မင်္ဂလာဒုံဆိုင်ခွဲ )</span></h1>
                <p className='text-textbody font-base text-center'>G-K07 ၊ Terminal M Mall မြေညီထပ်၊ အမှတ်သုံးလမ်းမကြီးနှင့် ခရေပင်လမ်းခွဲထောင့်၊ မင်္ဂလာဒုံမြို့နယ်၊ ရန်ကုန်မြို့။</p>
                <p className='text-textbody font-base text-center mt-1'>&#9743; 09 260 981 770, 09 260 981 780</p>
            </div>
        </div>

        <div>
            <h1 className='font-shippori font-bold text-xl text-textpri text-center my-5'><i className="bi bi-envelope me-2"></i>Send Email</h1>
            <div className='w-11/12 md:w-6/12 lg:w-4/12 mx-auto flex justify-center items-center flex-col'>
                <input className='bg2 shadow border-2 border-shape outline-none focus:border-accent2 w-full p-2 mb-1 text-textpri font-shippori' type="text" placeholder='Name . . .' />
                <input className='bg2 shadow border-2 border-shape outline-none focus:border-accent2 w-full p-2 mb-1 text-textpri font-shippori' type="text" placeholder='Email . . .' />
                <textarea className='bg2 shadow border-2 border-shape outline-none focus:border-accent2 w-full p-2 mb-1 text-textpri font-shippori' placeholder='Write text here . . .'  rows="7"></textarea>
                <button className='font-shippori text-white bg-accent1 py-2 w-full mt-2 shadow hover:bg-myorange rounded-3xl'>SEND</button>
            </div>
        </div>

        <div className='flex justify-center items-center flex-wrap mt-16 bg2 py-8'>
            <div className='w-[300px] md:w-[390px] mx-3 overflow-hidden mb-4 sm:mb-0 '>
                <img onClick={() => openModal(1)} className='w-full hover:scale-110 hover:saturate-200 duration-200' src="./images/ui/shop1.png" alt="" />
            </div>
            <div className='w-[300px] md:w-[390px] mx-3 overflow-hidden'>
                <img onClick={() => openModal(2)} className='w-full hover:scale-110 hover:saturate-200 duration-200' src="./images/ui/shop2.png" alt="" />
            </div>
            <div className='w-[300px] md:w-[390px] mx-3 overflow-hidden'>
                <img onClick={() => openModal(3)} className='w-full hover:scale-110 hover:saturate-200 duration-200' src="./images/ui/shop3.png" alt="" />
            </div>
        </div>

        <div className='mt-8'>
            <h1 className='font-shippori font-bold text-lg text-textbody text-center mt-3 mb-8'>SHOP 1 <span className='font-normal'>( မြို့လယ်ဆိုင်ခွဲ )</span></h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238.75272466431656!2d96.14918671964104!3d16.774506557038638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb7f6c1fe09d%3A0x865306e65d7e3e1e!2z4YCV4YCQ4YC64YCA4YCs4YC44YCF4YCt4YCU4YC64YCb4YC94YC-4YCx4YCb4YCQ4YCU4YCs4YCG4YCt4YCv4YCE4YC6IFB1Y2NhIEdvbGQgYW5kIEpld2VsbGVyeQ!5e0!3m2!1sen!2smm!4v1695184601119!5m2!1sen!2smm" className="w-full outline outline-black/20" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Contactbox/>

        {/* ============================== image modal ==================================== */}
        {isOpenModal &&
        <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-50'>
            <div onClick={() => setIsOpenModal(false)} className='text-end translate-y-2 sm:translate-y-5'><i className="bi bi-x-lg text-xl md:text-2xl lg:text-3xl text-white hover:bg-accent1 py-2 px-3 rounded-full mr-3 sm:mr-5"></i></div>
            <div id='modaldialog' className='relative h-full flex justify-center items-center'>
                <div className='w-[92%] sm:w-[420px] md:w-[620px] lg:w-[900px] mx-auto'>
                    <img className='w--full saturate-150' src={`./images/ui/shop${curImage}.png`} alt="shop" />
                </div>
                <button onClick={prevImg} className='absolute left-0 sm:left-10 lg:left-16 top-[50%] text-2xl sm:text-3xl md:text-4xl text-accent1 bg-white hover:text-white hover:bg-accent1 rounded-full p-2 pe-3'><i className="bi bi-chevron-left"></i></button>
                <button onClick={nextImg} className='absolute right-0 sm:right-10 lg:right-16 top-[50%] text-2xl sm:text-3xl md:text-4xl text-accent1 bg-white hover:text-white hover:bg-accent1 rounded-full p-2 ps-3'><i className="bi bi-chevron-right"></i></button>
            </div>
        </div>
        }

    </Master>
  )
}

export default Contact

// style={{'-webkit-text-stroke': '1px #76767699'}}
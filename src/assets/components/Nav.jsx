import React, { memo, useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Context from '../../Context';
import CardCart from './CardCart';

const Nav = memo(() => {
    const navigate = useNavigate();
    const [navOpen,seetNavOpen] = useState(false);
    const [cartOpen,setCartOpen] = useState(false);
    const [userOption,setUserOption] = useState(false);

    const[isScorllTop,setIsScrollTop] = useState(false);
    const heightForCart = isScorllTop ? 'calc(100vh - 46px)' : 'calc(100vh - 161px)';

    window.onclick = (e) => {
        if(!e.target.classList.contains('userOptionOpener')){
            setUserOption(false);
        }
    }

    window.addEventListener('scroll', function(){
        if(this.window.scrollY > 116){
            setIsScrollTop(true);
        }else if(this.window.scrollY < 116){
            setIsScrollTop(false);
        }
    });

    const locae = useLocation();
    const pathname = locae.pathname.split('/')[1];

    const {datas,cartItems,setCartItems,orderItems,setOrderItems} = useContext(Context);
    const [total,setTotal] = useState();

    let totalamount = 0;

    const calculateTotal = () => {
        cartItems.map(val => totalamount += val.price * val.qty);
        setTotal(totalamount);
    }

    useEffect(() => {
        calculateTotal();
    });

    const order = () => {
        setOrderItems([...cartItems,...orderItems]);
        setCartItems([]);
        navigate('/order');
    }

  return (
    <>
        {/* =========================== logo ================================= */}
        <div className='block text-center pt-2 pb-4 md:pb-14 bg-white'>
            <a href='/' style={{WebkitTextStroke: '1px #76767640'}} className='block text-4xl font-medium font-ponenyet text-accent1 hover:text-myyellow'>ပတ်ကား</a>
            <a href='/' className='block text-sm font-medium leading-3 text-textbody'>စိန်‌ရွှေရတနာဆိုင်</a>
        </div>
        
        {/* =========================== nav bar ================================= */}
        <nav id='nav' className='whitebg sticky top-0 z-50 pb-1 flex justify-between items-stretch sm:px-2 md:px-0 lg:px-7 border-y border-shape'>
            <div className='px-2 pt-1 text-lg'></div>

            {/* =========================== nav for dektop ================================= */}
            <div className='hidden md:block font-shippori pt-2 ms-12 lg:ms-16 text-center'>
                <NavLink to="/" className='navLink text-textpri text-sm font-bold tracking-wider hover:text-accent1 px-5 lg:px-8 py-1 border-x border-textmute'>HOME</NavLink>
                <NavLink to="/products" className='navLink text-textpri text-sm font-bold tracking-wider hover:text-accent1 px-5 lg:px-8 py-1 border-r border-textmute'>PRODUCTS</NavLink>
                <NavLink to="/events" className='navLink text-textpri text-sm font-bold tracking-wider hover:text-accent1 px-5 lg:px-8  py-1 border-r border-textmute'>EVENTS</NavLink>
                <NavLink to="/about" className='navLink text-textpri text-sm font-bold tracking-wider hover:text-accent1 px-5 lg:px-8 py-1 border-r border-textmute'>ABOUT</NavLink>
                <NavLink to="/contact" className='navLink text-textpri text-sm font-bold tracking-wider hover:text-accent1 px-5 lg:px-8 py-1 border-r border-textmute'>CONTACT</NavLink>
                <div className='absolute -top-11 left-0 w-full text-center opacity-40 scale-x-110'>
                    <img className='w-[125px] inline' src="../src/assets/images/ui/head1.png" alt="frame" />
                </div>
                <div className='absolute -bottom-6 left-0 w-full text-center opacity-50 scale-x-110'>
                    <img className='w-[75px] inline' src="../src/assets/images/ui/foot1.png" alt="frame" />
                </div>
            </div>

            {/* =============================== cart ============================= */}
            <div className='flex justify-center items-center'>
                <div className=''>
                    <button onClick={() => setCartOpen( pre => !pre)} className='group cartOpener me-1 md:me-2 py-1 px-2 rounded hover:bg2'>
                        <i  className="cartOpener bi bi-cart3 text-textsec group-hover:text-accent1 text-lg"></i>
                        { cartItems.length > 0 &&
                            <sup><span className="cartOpener text-xs text-white shadow rounded px-1 bg-teal-600">{cartItems.length}</span></sup>
                        }
                    </button>

                    {/* =============================== cart modal ============================= */}
                    <div style={{height:heightForCart}} className={cartOpen ? 'absolute top-12 right-0 w-[320px] sm:w-[340px] cardbg p-4 rounded shadow-md shadow-black/30 duration-300' : 'hidden'}>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-shippori font-bold text-textpri text-lg'><i className="bi bi-cart3 text-accent1 me-2"></i>Product Cart</h1>
                            <button onClick={() => setCartOpen(false)}><i className="bi bi-x-lg text-textpri hover:text-myorange text-xl"></i></button>
                        </div>
                        <div className='flex flex-col justify-between items-center h-full py-4'>
                            { cartItems.length > 0 &&
                               <div className='w-full h-[90%] overflow-y-auto pe-3'>
                                {
                                    cartItems.map(val => (
                                        <CardCart key={val.id} data={val} />
                                    ))
                                }
                                </div> 
                            }

                            { cartItems.length <= 0 &&
                                <div className='w-full h-full overflow-y-auto flex justify-center items-center'>
                                    <h1 className='font-shippori text-neutral-400 font-bold text-xl'>-- No Item --</h1>
                                </div> 
                            }
                            
                            <div className='w-full'>
                                <div className='flex justify-between items-center flex-wrap mt-2 mb-2'>
                                    <h1 className='font-shippori font-semibold text-textbody text-sm'>Total : </h1>
                                    <p className='font-shippori font-bold text-textpri'>{total} MMK</p>
                                </div>
                                <button onClick={() => order()} className='w-full rounded shadow py-2 bg-accent1 mb-3 text-sm text-white font-shippori font-bold hover:bg-myorange'>Checkout</button>
                            </div>

                        </div>
                    </div>

                </div>

                {/* =========================== user options ================================= */}
                <div id='' onClick={() => setUserOption(pre => !pre)} className='group userOptionOpener relative hover:bg2 px-1 rounded duration-100'>
                    {/* <i className="userOptionOpener bi bi-person bg-accent1 rounded-full px-2 py-1 text-textwhite me-1 text-lg"></i> */}
                    <div className='flex justify-center items-center cursor-pointer pt-1'>
                        <div className='overflow-hidden'>
                            <img className='userOptionOpener object-cover w-[30px] rounded-full border border-textmute py-1' src="https://nordot-res.cloudinary.com/c_limit,w_800,f_auto,q_auto:eco/ch/images/1055490703937389354/origin_1.jpg" alt="profile" />
                        </div>
                        <i className="userOptionOpener bi bi-caret-down-fill text-textbody group-hover:text-accent1"></i> 
                    </div>

                    <div className={userOption ? 'whitebg absolute top-8 -right-4 flex flex-col justify-start items-start w-[170px] font-shippori border border-shape shadow rounded-sm z-10' : 'hidden' }>
                        <Link to="/login"  className='w-full text-sm text-left tracking-wider py-2 border-b border-shape font-semibold text-textbody hover:bg1 whitespace-nowrap'><i className="bi bi-box-arrow-in-right me-3 border-l-4 ps-3 py-2 border-accent1"></i>Login/Signup</Link>
                        <Link to="/account" className='w-full text-sm text-left tracking-wider py-2 border-b border-shape font-semibold text-textbody hover:bg1 whitespace-nowrap'><i className="bi bi-person me-3 border-l-4 ps-3 py-2 border-accent1"></i>Account</Link>
                        <Link to="/order" className='w-full text-sm text-left tracking-wider py-2 border-b border-shape font-semibold text-textbody hover:bg1 whitespace-nowrap'><i className="bi bi-flower2 me-3 border-l-4 ps-3 py-2 border-accent1"></i>Order</Link>
                        <Link to="/favourite" className='w-full text-sm text-left tracking-wider py-2 border-b border-shape font-semibold text-textbody hover:bg1 whitespace-nowrap'><i className="fbi bi-heart me-3 border-l-4 ps-3 py-2 border-accent1"></i>Favourite</Link>
                        <Link to="/login" className='w-full text-sm text-left tracking-wider py-2 font-semibold text-textbody hover:bg1 whitespace-nowrap'><i className="bi bi-box-arrow-right me-3 border-l-4 ps-3 py-2 border-accent1"></i>Logout</Link>
                    </div>
                </div>
                
                {/* =========================== nav for mobile opener ================================= */}
                <div className='md:hidden ms-2 px-2 py-1 rounded hover:bg1'>
                    <button onClick={() => seetNavOpen(true)}><i className="bi bi-list px-1 text-textsec text-3xl rounded shadow hover:bg-accent1 hover:text-white"></i></button>
                </div>
                <div className={navOpen ? 'md:hidden fixed top-0 left-0 z-[99] bg1 w-full h-[100vh] text-end' : 'hidden'}>
                    <button onClick={() => seetNavOpen(false)} className='text-textpri px-2 py-1 rounded text-xl bg3 mt-2 me-5 border border-shape hover:bg-myorange hover:text-white'><i className="bi bi-x-lg"></i></button>
                    <div className='h-full flex justify-center items-center'>

                        <div className='relative w-[300px] border-y border-shape font-shippori flex flex-col justify-center items-center -mt-24'>
                            <NavLink to="/" className='navLink w-full text-center text-textbody text-sm font-semibold hover:text-accent1 px-10 py-3 border-b border-shape'>HOME</NavLink>
                            <NavLink to="/products" className='navLink w-full text-center text-textbody text-sm font-semibold hover:text-accent1 px-10 py-3 border-b border-shape'>PRODUCTS</NavLink>
                            <NavLink to="/events" className='navLink w-full text-center text-textbody text-sm font-semibold hover:text-accent1 px-10 py-3 border-b border-shape'>EVENTS</NavLink>
                            <NavLink to="/about" className='navLink w-full text-center text-textbody text-sm font-semibold hover:text-accent1 px-10 py-3 border-b border-shape'>ABOUT</NavLink>
                            <NavLink to="/contact" className='navLink w-full text-center text-textbody text-sm font-semibold hover:text-accent1 px-10 py-3'>CONTACT</NavLink>
                            <div className='w-[115px] absolute -top-14 left-22 opacity-50'>
                                <img className='w-full' src="../src/assets/images/ui/head1.png" alt="frame" />
                            </div>
                            <div className='w-[90px] absolute -bottom-10 left-[35%] opacity-50'>
                                <img className='w-full' src="../src/assets/images/ui/foot1.png" alt="frame" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </nav>

        
    </>
  )
})

export default Nav
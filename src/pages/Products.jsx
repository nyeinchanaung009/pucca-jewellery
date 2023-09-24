import React, { useContext, useRef, useState } from 'react'
import Master from '../layout/Master'
import Categories from '../components/Categories'
import CardProduct from '../components/CardProduct'
import Context from '../Context'

const Products = () => {
    const {datas} = useContext(Context);
    const inputRef = useRef();

    const [isSearch,setIsSearch] = useState(false);
    const [showData,setShowData] = useState(datas);
    const [itemdesc,setItemDesc] = useState('All');
    const [currentPage,setCurrentPage] = useState(1);

    let totalPage = showData.length > 16 ? Math.ceil(showData.length / 16) : 1;
    let pagination = [];
    for(var i=0; i<totalPage; i++){
        pagination.push(i+1);
    }

    let startpoint = (16 * currentPage) - 16;
    let endpoint = (currentPage * 16) ;

    let paginatedData = showData.slice(startpoint,endpoint);

    const prevPage = () => {
        currentPage > 1 && setCurrentPage(currentPage-1);
    }

    const nextPage = () => {
        currentPage < totalPage && setCurrentPage(currentPage+1);
    }

    const filter = (type,content) => {
        setCurrentPage(1);
        if(type == 'material'){
            setShowData(datas.filter(val => val.material == content));
        }
        else if(type == 'category'){
            setShowData(datas.filter(val => val.category == content));
        }
        setItemDesc(content.toUpperCase());
    }

    const allItem = () => {
        setCurrentPage(1);
        setShowData(datas);
        setItemDesc('All');
    }

    const latest = () => {
        setCurrentPage(1);
        setShowData(datas.slice(-12));
        setItemDesc('Newest');
    }

    const searchItem = () => {
        setIsSearch(true);
        let keyword = inputRef.current.value.toString();
        setCurrentPage(1);
        let result = datas.filter(val => val.category.includes(keyword.toLowerCase()) || val.name.includes(keyword) || val.productId.includes(keyword.toUpperCase()) || val.material.includes(keyword.toLowerCase()));
        setShowData(result);
        setItemDesc(keyword.toUpperCase());
    }

    const searchbyenter = (e) => {
        if(e.key == 'Enter'){
            searchItem();
        }
    }

    const closeSearch = () => {
        inputRef.current.value = '';
        setIsSearch(false);
        allItem();
    }

    const scrollIntoP = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <Master>
        <div>
            {/* =========================================== categories =================================== */}
            <div className='my-5 w-full'>
                <h1 className='w-11/12 sm:w-9/12 mx-auto font-shippori font-bold text-lg text-textpri my-8'>CATEGORIES</h1>
                <button onClick={scrollIntoP} className='block w-full lg:scale-95'>
                    <Categories filterSearch={filter} />
                </button>
            </div>

            <hr />

            {/* ============================================= products ============================= */}
            <div>

                <div id='products' className='w-11/12 sm:w-9/12 py-3 sm:py-12 mx-auto flex justify-between items-center flex-wrap'>
                    <h1  className='font-shippori font-bold text-lg text-textpri mb-4 sm:mb-0'>PRODUCTS <span className='text-base text-textbody ms-5'>Items : <span className='font-black'>{itemdesc}</span></span></h1>
                    <div className='flex justify-between items-center'>
                        <div className='me-1 sm:me-3 flex justify-center items-stretch'>
                            <input onKeyUp={searchbyenter} ref={inputRef} className='w-9/12 font-shippori bg3 px-2 py-1 rounded-s outline-none border-2 focus:border-accent1' placeholder='Search . . .' type="text" />
                            <i onClick={searchItem} className="bi bi-search bg-accent1 pt-1 px-3 text-white rounded-e hover:bg-myorange"></i>
                        </div>

                        <div className='relative group'>
                            <button title='filter' className='text-xs sm:text-xl  px-2 py-1 hover:cardbg text-textbody border border-shape rounded'><i className="bi bi-filter"></i><i className="bi bi-funnel"></i></button>
                            
                            <div className="group-hover:block hidden absolute right-0 -top-3 lg:-top-1 z-40 mt-9 p-4 bg-white border border-shape rounded shadow-md shadow-black/20 w-[290px] h-fit">
                                <div className='pb-5 border-b border-shape'>
                                    <h1 className='font-shippori font-semibold text-textbody mb-2'>Item type : </h1>
                                    <button onClick={() => filter('material','gold')} className='hover:bg-myyellow duration-200 bg-accent2 text-white mr-2 px-3 pb-2 pt-1 shadow rounded-sm'>#ရွှေ</button>
                                    <button onClick={() => filter('material','diamond')} className='hover:bg-myyellow duration-200 bg-accent2 text-white mr-2 px-3 pb-2 pt-1 shadow rounded-sm'>#စိန်</button>
                                </div>
                                <div className='mt-2 mb-3 pb-2 pt-3 border-b border-shape'>
                                    <button onClick={allItem} className='font-shippori font-bold px-3 py-2 me-2 mb-2 text-sm text-textwhite bg-accent2 hover:bg-myyellow duration-200 rounded-sm shadow-sm border hover:border-shape'>All</button>
                                    <button onClick={latest} className='font-shippori font-bold px-3 py-2 me-2 mb-2 text-sm text-textpri bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>Newest Items</button>
                                </div>  
                                <div className='mt-2'>
                                    <h1 className='font-shippori font-semibold text-textbody mb-2'>Categories</h1>
                                    <div className='flex justify-start items-center flex-wrap'>
                                        <button onClick={() => filter('category','necklace')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#ဆွဲကြိုး</button>
                                        <button onClick={() => filter('category','bracelet')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#လက်ကောက်</button>
                                        <button onClick={() => filter('category','ring')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#လက်စွပ်</button>
                                        <button onClick={() => filter('category','hand chain')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#ဟန်းချိန်း</button>
                                        <button onClick={() => filter('category','locket')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#ဆွဲသီး</button>
                                        <button onClick={() => filter('category','earrings')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#နားကပ်</button>
                                        <button onClick={() => filter('category','wedding ring')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#လက်ထပ်လက်စွပ်</button>
                                        <button onClick={() => filter('category','bayet')} className='px-3 py-2 me-2 mb-2 text-xs font-bold text-textbody bg2 hover:bg1 duration-200 rounded-sm shadow-sm border hover:border-shape'>#လည်ဘယက်</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {isSearch && (
                    <div className='w-10/12 sm:w-9/12 mx-auto my-4 md:my-5 bg2 px-3 sm:px-5 md:px-9 flex justify-between items-center'>
                        <h1 className='font-shippori text-textbody font-bold'>{showData.length} Products Found</h1>
                        <button onClick={closeSearch} className='text-red-500 px-2 py-1 rounded-full hover:cardbg  my-2'><i className="bi-x-lg text-2xl"></i></button>
                    </div>
                )}
                <div className='w-11/12 sm:w-10/12 mx-auto flex justify-center items-center flex-wrap'>
                    
                    {showData.length > 0 &&
                        paginatedData.map(val => (
                            <CardProduct key={val.id} data={val} wid='w-6/12 min-[580px]:w-4/12 lg:w-3/12 xl:w-[300px]' />
                        ))
                    }
                    {showData.length < 1 && isSearch ? (
                        <div className='py-32'>
                            <h1 className='font-shippori font-bold text-textmute text-center text-2xl'>-- No Product Found! --</h1>
                        </div>
                    ) : ''}
                </div>
            </div>

            {showData.length > 0 &&
                <div className='font-shippori text-bold text-center text-textbody mb-16'>{currentPage+'/'+totalPage}</div>
            }

            {/* ============================================= pagination ============================= */}
            {showData.length > 0 &&
                <div className='mb-20'>
                    <div className='flex justify-center items-center'>
                        <button onClick={prevPage} className={currentPage == 1 ? 'pointer-events-none opacity-70 pag' : 'pag'}><i className="bi bi-chevron-left"></i></button>
                        {
                        pagination.map(val => (
                                <button key={val} onClick={() => setCurrentPage(parseInt(val))} id='paginateItem' className={currentPage == val ? 'active pag' : 'pag'} >{val}</button>
                        ))                     
                        }
                        <button onClick={nextPage} className={currentPage == totalPage ? 'pointer-events-none opacity-70 pag' : 'pag'} ><i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            }
        </div>
    </Master>
  )
}

export default Products
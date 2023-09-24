import React from 'react'
import Master from '../layout/Master'
import Slogan from '../components/Slogan'

const About = () => {
  return (
    <>
      <Master>
          <div className='mt-5 bg-white'>
              <h1 className='font-shippori font-bold text-2xl text-textpri text-center py-5 mt-3 md:mt-2'>ABOUT US</h1>
              
              <div className='bg-fixed bg-no-repeat bg-cover bg-bottom pt-2' style={{backgroundImage: 'url(./src/assets/images/ui/banner1.jpg)'}}>
                  <div className='w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto z-40 relative text-center md:text-right translate-y-28 md:translate-y-32'>
                      <div className='w-[260px] h-[260] md:w-[285px] md:h-[285px] lg:w-[320px] lg:h-[320px] py-1 scale-90 inline-block'>
                          <img className='w-full h-full object-cover rounded-full' src="./src/assets/images/ui/banner03.jpg" alt="pf" />
                      </div>
                  </div>
              </div>

              <div className='bg-white py-20'>
                  <div className='w-11/12 md:w-10/12 mx-auto mt-20'>
                      <p className='text-textpri tracking-wide leading-7 md:leading-8 font-medium'>
                          ပတ်ကားစိန်ရွှေရတနာဆိုင်ကို ၁၉၈၄ ခုနှစ်မှာ စတင်ဖွင့်လှစ်ခဲ့ပြီး၊ ယခုဆို နှစ်ပေါင်း ၃၀ ကျော်တိုင်ခဲ့ပါပြီ။ ပစ္စည်းမှန်ကန်မှု၊ ဈေးနှုန်းမှန်ကန်မှု၊ ရွှေအရည်အသွေး အထူး (အထူး) ကောင်းမွန်မှုနှင့် ဒီဇိုင်းဆန်းသစ်မှုတို့သည် ပတ်ကား၏ ထိပ်တန်းစံထားရာတွေဖြစ်ပါသည်။
                          ဖောက်သည်များ၏ ယုံကြည်မှုကို အလေးအနက်ထား၍ အကောင်းမွန်ဆုံး ရွှေ၊ ရတနာပစ္စည်းများနှင့် ဝန်ဆောင်မှုပေးနိုင်ခြင်းကပင် ပတ်ကား၏ နှစ်ပေါင်း ၃၀ကျော် ရပ်တည်လာသည့် စေတနာနှင့်ဂုဏ်သိက္ခာ တစ်ခုပင်ဖြစ်ပါသည်။
                      </p>

                      <p className='font-shippori text-textpri leading-7 font-semibold mt-4'>
                          <span className='font-black text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sapiente cupiditate aliquam. <br /> </span>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quisquam libero dolor est, odio omnis eveniet assumenda recusandae animi! Illum odit eius id beatae reiciendis libero?
                          <br /><br />
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat hic totam recusandae, itaque laboriosam fugit nesciunt aliquid velit fugiat inventore quod perferendis tempore exercitationem quos nisi aut dignissimos! Quas dolore quos sed ut aperiam consequatur ducimus officia explicabo doloribus repellendus impedit reiciendis fuga beatae facilis voluptate nulla suscipit non, animi sequi. Nisi molestias, eaque quisquam architecto qui tempore recusandae molestiae! Doloribus vel omnis veniam veritatis in magni. Porro quo dolorem fuga? Recusandae eveniet, sequi iste ullam expedita odit. Reiciendis doloremque numquam pariatur sit ducimus repellendus, quis corporis tempora debitis eos explicabo non sed vitae id consectetur aliquam harum aspernatur culpa. Sed quia hic atque odit perferendis illo, deserunt rem distinctio exercitationem dolor ipsam suscipit sunt minima vero corrupti quasi officiis quisquam, non magni facilis esse reiciendis. Alias deserunt eligendi, voluptas consectetur impedit corrupti inventore.
                      </p>

                      <div className='flex justify-between items-center flex-wrap mt-20'>
                          <div className='w-11/12 sm:w-6/12 md:w-4/12 mx-auto font-shippori font-bold  mb-10 md:mb-0'>
                              <div className='w-full sm:w-10/12 mx-auto'>
                                  <img className='w-[50px] md:w-[55px] mx-auto mb-6 opacity-[0.68]' src="./src/assets/images/ui/goals.png" alt="" />
                                  <h1 className='text-[16px] text-textpri text-center'>OUR MISSIONS</h1>
                                  <p className='text-textsec pt-2 text-justify sm:text-center'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odit amet aliquid aut modi doloremque aspernatur odio veritatis, nemo quisquam, ab dolorem corporis ea numquam sed libero. Reiciendis totam illum accusamus vel quod eligendi laborum architecto quisquam, aliquam fugit! In qui reprehenderit possimus.
                                  </p>
                              </div>
                          </div>

                          <div className='w-11/12 sm:w-6/12 md:w-4/12 mx-auto font-shippori font-bold mb-10 md:mb-0'>
                              <div className='w-full sm:w-10/12 mx-auto'>
                                  <img className='w-[50px] md:w-[55px] mx-auto mb-6 opacity-[0.68]' src="./src/assets/images/ui/pearl-necklace.png" alt="" />
                                  <h1 className='text-[16px] text-textpri text-center'>WHAT ABOUT PRODUCTS</h1>
                                  <p className='text-textsec pt-2 text-justify sm:text-center'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odit amet aliquid aut modi doloremque aspernatur odio veritatis, nemo quisquam, ab dolorem corporis ea numquam sed libero. Reiciendis totam illum accusamus vel quod eligendi laborum architecto quisquam, aliquam fugit! In qui reprehenderit possimus.
                                  </p>
                              </div>
                          </div>

                          <div className='w-11/12 sm:w-6/12 md:w-4/12 mx-auto font-shippori font-bold'>
                              <div className='w-full sm:w-10/12 mx-auto'>
                                  <img className='w-[60px] md:w-[63px] mx-auto mb-4 opacity-[0.68]' src="./src/assets/images/ui/handshake.png" alt="" />
                                  <h1 className='text-[16px] text-textpri text-center'>RESPONSIBILITY</h1>
                                  <p className='text-textsec pt-2 text-justify sm:text-center'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odit amet aliquid aut modi doloremque aspernatur odio veritatis, nemo quisquam, ab dolorem corporis ea numquam sed libero. Reiciendis totam illum accusamus vel quod eligendi laborum architecto quisquam, aliquam fugit! In qui reprehenderit possimus.
                                  </p>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>

              <Slogan/>
              <div className='my-20'></div>
              
          </div>
      </Master>
    </>
    
  )
}

export default About
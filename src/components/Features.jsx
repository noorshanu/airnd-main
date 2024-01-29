import React from 'react'
import Cards from './Cards'

function Features() {
  return (
   <section className='mt-[10rem] mb-5 sm:mb-[4rem] relative z-[200]'>
    <img src="images/blue.png" alt="" className=' absolute -top-[50%] h-[1200px] w-[600px]' />
      <div className='container-wrapper max-w-7xl mx-auto'>
    <div className=' flex justify-between items-center gap-4'>
      
        <div className=" bg-[#00ffc0] h-[4px] w-full max-w-sm "></div>
            <img src="images/white-logo.png" alt="" className=' h-[25px]'/>
        <div className=" bg-[#00ffc0] w-full h-[3px] max-w-sm   "></div>
        </div>
    </div>
    <div className='container-wrapper max-w-7xl mx-auto'>
    <div className=' flex justify-evenly flex-col sm:flex-row items-center gap-8 mx-auto mt-[4rem] '>
        <Cards title='Feature 1' Iconsrc='images/clod.png'/>
        <Cards title='Feature 1' Iconsrc='images/star.png'/>
        <Cards title='Feature 1' Iconsrc='images/net.png'/>

    </div>
    </div>
   </section>
  )
}

export default Features
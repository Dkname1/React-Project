import React from 'react'
import laptop_img from './Assets/card.jpg'

function Experts() {
  return (
  <>
<div className="max-w-[1540px] mx-auto  md:grid grid-cols-2 my-[100px] gap-20 h-auto" >
    <div className=" col-span-1 w-[100%] 
    md:w-[80%] lg:w-[100%]
   ">
          <img src={laptop_img} alt="" />
    </div>

    <div className="col-span-1 my-[50px]   text-center md:text-start md:flex flex-col justify-center ">
             <h2 className='text-3xl  font-bold my-2'>Learn From Expert</h2>
             <p className='text-2xl my-2 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis excepturi officia molestias totam vel voluptatem harum maxime dignissimos vero praesentium.</p>
             <button className='w-[30%] bg-black text-white p-4  rounded my-2'>Get Started</button>
             </div>
     </div>
  </>
  )
}

export default Experts
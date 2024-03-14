import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <>
       <div className='bg-[#99f6e4] w-full p-4'>
              <div className='max-w-[1540px] my-[170px] mx-auto flex justify-center items-center flex-col py-[100px]'>
                   <div className=" text-4xl md:text-6xl font-medium p-2 text-[#c026d3] ">
                            Learn with us
                   </div>
                   <h1 className=' text-5xl sm:text-6xl md:text-8xl font-extrabold p-2 italic'>Grow with us.</h1>
                   <h2 className='text-4xl md:text-6xl font-medium text-[#fff] p-3'>Learn 

                   <ReactTyped className='ml-2'
                          strings={["Web Development","React js", "Express js", "Mongo Db"]}
                           typeSpeed={100}
                           backSpeed={50}
                            loop={true}
                            /></h2>
                             <button className='bg-black text-white px-4 py-2 rounded mt-[20px]'>Get Started</button>
              </div>
       </div>
    </>
  )
}

export default Banner
import React from 'react'
import { BsPerson } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsPersonGear } from "react-icons/bs";
function Cards() {
  return (
   <>
    <div className=" py-[100px]">
            <div className="max-w-[1340px] mx-auto  md:grid grid-cols-3 gap-20 px-2 ">
               <div className="shadow-xl hover:scale-105  duration-500 py-10 px-7 flex flex-col items-center mt-10 ">
                     <div className="text-3xl ">
                       <BsPerson />
                      </div>
                    <h1 className='text-2xl font-normal mt-5'>Web development</h1>
                   <h1 className='text-3xl font-bold mt-5'>$149</h1>
                   <p className='text-xl mt-5'>Lorem Ipsum is simply</p>
                  <p className='text-xl mt-5 text-center'>Lorem Ipsum is simple dummy text of thr printing</p>
                   <p className='text-xl mt-5 text-center'>Lorem Ipsum is simply dumm</p>
      <button className='bg-[lightgreen] font-bold px-10 py-2 rounded mt-3'>Start Trial</button>
  </div>

  <div className="shadow-xl  hover:scale-105 duration-100 bg-gray-200 py-10 px-7 flex flex-col items-center mt-10">
  <div className="text-3xl ">
       <BsPeople />
    </div>
    <h1 className='text-2xl font-normal mt-5'>Digital Marketing</h1>
      <h1 className='text-3xl font-bold mt-5'>$149</h1>
      <p className='text-xl mt-5'>Lorem Ipsum is simply</p>
      <p className='text-xl mt-5 text-center'>Lorem Ipsum is simple dummy text of thr printing</p>
      <p className='text-xl mt-5 text-center'>Lorem Ipsum is simply dumm</p>
      <button className='bg-[purple]  text-[lightgreen] font-bold px-10 py-2 rounded mt-3'>Start Trial</button>
      </div>  


  <div className="shadow-xl hover:scale-105 duration-500 py-10 px-7 flex flex-col items-center mt-10"><div className="text-3xl ">
       <BsPersonGear />
    </div>
    <h1 className='text-2xl font-normal mt-5'>Web development</h1>
      <h1 className='text-3xl font-bold mt-5'>$149</h1>
      <p className='text-xl mt-5'>Lorem Ipsum is simply</p>
      <p className='text-xl mt-5 text-center'>Lorem Ipsum is simple dummy text of thr printing</p>
      <p className='text-xl mt-5 text-center'>Lorem Ipsum is simply dumm</p>
      <button className='bg-[lightgreen] font-bold px-10 py-2 rounded mt-3'>Start Trial</button>
      </div>   
              
          </div>     
    </div>
   </>
  )
}

export default Cards
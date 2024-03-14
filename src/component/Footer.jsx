import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";


function Footer() {
  return (
    <>
    <div className="bg-[#99f6e4] w-full p-4">
      <div className="max-w-[1640px] mx-auto  py-10
       md:grid grid-cols-5 gap-20">
              <div className="col-span-2 flex flex-col">
                 <h1 className='text-5xl font-bold mb-6 colspan-2'>Learning Skill</h1>
                 <p className='text-xl my-1 font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                 <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                 <p className='text-xl my-1 '>Lorem ipsum dolor sit.</p>
                 <div className="text-3xl flex gap-14 mt-8">
                   <ImFacebook2/>
                   <IoLogoInstagram/>
                   <FaTwitterSquare />
                   <RiPinterestLine/>
                 </div>
              </div>
              
              <div className="col-span-1 md:flex flex-col">
                            <h1 className='text-2xl font-bold mt-6'>Solutions</h1>
                            <p className='text-xl font-thin mt-4'>Analytics</p>
                            <p className='text-xl font-thin mt-3'>Marketing</p>
                            <p className='text-xl font-thin mt-3'>Commerce</p>
                            <p className='text-xl font-thin mt-3'>Insights</p>
              </div>
               
              <div className="col-span-1 md:flex flex-col">
                            <h1 className='text-2xl font-bold mt-6'>Support</h1>
                            <p className='text-xl font-thin mt-4'>Planning</p>
                            <p className='text-xl font-thin mt-3'>Documentaion</p>
                            <p className='text-xl font-thin mt-3'>Guides</p>
                            <p className='text-xl font-thin mt-3'>API Status</p>
              </div>
              <div className="col-span-1 md:flex flex-col">
                            <h1 className='text-2xl font-bold mt-6'>Company</h1>
                            <p className='text-xl font-thin mt-4'>About</p>
                            <p className='text-xl font-thin mt-3'>Blog</p>
                            <p className='text-xl font-thin mt-3'>Jobs</p>
                            <p className='text-xl font-thin mt-3'>Press</p>
                            <p className='text-xl font-thin mt-3'>Careers</p>

              </div>

              

      </div>

    </div>
    </>
  )
}

export default Footer
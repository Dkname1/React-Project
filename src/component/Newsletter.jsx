import React from 'react'

function Newsletter() {
  return (
     <>
 <div className='bg-[#99f6e4] w-full p-10'>
   <div className="max-w-[1540px] mx-auto md:flex justify-between">
      <div className=" text-center my-12">
          <h1 className='text-4xl font-bold pt-9'>Want to learn latest I.T skills?</h1>
          <p className='text-xl mt-2'>signup to our newsletter and stay up to date</p>
      </div>
      <div className="flex flex-col  items-center md:justify-center 
    p-4">
              <div>
                <input className=' sm:w-full md:w-[60%] lg:w-[60%] 
                text-xl p-2 rounded' type="email" placeholder='Enter Email' />
                <button className=' sm:w-[50%] md:w-[30%] sm:text-center md:text-center text-xl  bg-black text-white p-2 mt-2 ml-2'>Notify Me</button>
              </div>
              <p className='text-center sm:text-xl  mt-2'>we care about protection of your data. Read our</p>
              <h2 className='text-2xl font-bold'>privacy policy</h2>
      </div>
</div>      
 </div>
 
     </>
    
  )
}

export default Newsletter
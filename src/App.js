
import { useState } from 'react';
import './App.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Banner from './component/Banner';
import Experts from './component/Experts';
import Newsletter from './component/Newsletter';
import Cards from './component/Cards';
import Footer from './component/Footer';


function App() {
  const [toggle, setToggle]=useState(false)
  return (
   <>
   <div className='bg-[#99f6e4] p-4'>

       <div className='flex justify-between items-center  max-w-[1540px] py-2 mx-auto'>

            <div className='flex justify-center  item-center text-3xl font-bold italic'>WebSite</div>
            
             <ul className=' md:flex hidden gap-10 text-xl font-medium '>
              <li>
                 Home
              </li>
              <li>
                 About
              </li>
              <li>
                 Company
              </li>
              <li>
                 Resource
              </li>
              <li>
                 Contact
              </li>
             </ul>
             {toggle ? <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-3xl md:hidden block' />:<AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-3xl md:hidden block'/>}
             
             

             <ul className={` md:hidden  block text-white text-3xl font-bold bg-black fixed
             top-[84px] w-full h-screen flex flex-col justify-center items-center
             left-0 duration-300
              ${toggle? 'left- [0]':'left-[-100%]'}`}>

              <li className='hover:text-[#99f6e4] p-5'>
                 Home
              </li>
              <li className='hover:text-[#99f6e4] p-5' >
                 About
              </li >
              <li className='hover:text-[#99f6e4] p-5'>
                 Company
              </li>
              <li className='hover:text-[#99f6e4] p-5'>
                 Resource
              </li>
              <li className='hover:text-[#99f6e4] p-5'>
                 Contact
              </li>
             </ul>
        </div>
     </div>
     <Banner/>
     <Experts/>
     <Newsletter/>
     <Cards/>
     <Footer/>
   </>
  );
}

export default App;

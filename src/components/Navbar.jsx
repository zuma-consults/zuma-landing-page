import React from 'react'
import { useState } from 'react'
import {close,logo,menu, ZumaLogo} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toogle,setToogle] = useState(false)
  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
         <img src={ZumaLogo} alt="hoobank" className='w-[120px] h-[120px] rounded-full object-cover'/>
         <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav,index)=>(
            <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-{16px} ${index === navLinks.length -1 ? 'mr-o' : 'mr-10' } text-white `}>
              <a href={`${nav.id}`}>
                {nav.title}
              </a>

            </li>
          ))}

         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toogle ? close : menu }
           alt="menu"
            className='w-[30px] h-[30px] object-contain'
            onClick={() => setToogle((prev) => !prev)} />
            <div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-gradient-to-b from-black via-gray-800 to-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
             <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav,index)=>(
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-{16px} ${index === navLinks.length -1 ? 'mr-o' : 'mb-4' } text-white `}>
               <a href={`${nav.id}`}>
                {nav.title}
               </a>

            </li>
          ))}

         </ul>
             
            </div>

         </div>

      </nav>
    </div>
  )
}

export default Navbar
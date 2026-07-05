import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full z-50'>
      <div>
        <div className='flex flex-row justify-between p-3 md:px-32 px-5 bg-orange-500 font-bold shadow-[0_3px_10px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    
                </span>
                <h1 className='text-xl ml-2 font-semibold'>TECNO-MOTOR</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-[#15225b]  transition-all cursor-pointer'>
                 HOME
                 </Link>
                <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-[#15225b]  transition-all cursor-pointer'>
                 QUIENES SOMOS
                 </Link>
                <Link 
                 to=''
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-[#15225b] transition-all cursor-pointer'>
                 SERVICIOS
                </Link>
                <Link 
                 to='' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-[#15225b]   transition-all cursor-pointer'>
                 CONTACTO
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-orange-500 text-black left-0 top-12 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-white transition-all cursor-pointer'
                 onClick={closeMenu}>
                 HOME
                 </Link>
                 <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-white  transition-all cursor-pointer'
                 onClick={closeMenu}>
                 QUIENES SOMOS
                 </Link>
                <Link 
                 to=''
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-white  transition-all cursor-pointer'
                 onClick={closeMenu}>
                 SERVICIOS
                </Link>
                <Link 
                 to='' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-black  transition-all cursor-pointer'
                 onClick={closeMenu}>
                 CONTACTO
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navar
import React from 'react';
import { MdShoppingBasket } from "react-icons/md";

import Avatar from "./img/avatar.png";
import Logo from "./img/logo.png";

const Header = () => {
    return (
        <div className='fixed z-50 w-screen p-6 px-16'>
            
            {/* Desktop & Tablet Device */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                
                <div className='flex items-center gap-2'>
                    <img className='w-8 h-10 object-cover' src={Logo} alt="logo" />
                    <p className=' text-headingColor text-xl font-bold'>City</p>
                </div>

                <div className='flex items-center justify-center gap-8'>
                    
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>
                    
                    <div className=' relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-2xl text-textColor cursor-pointer'/>
                        <div className='absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex 
                        items-center justify-center'>
                            <p className='text-white text-xs font-semibold'>2</p>
                        </div>
                    </div>

                    <img src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] 
                    drop-shadow-xl" alt="userprofile" />
                </div>
            </div>
            

            {/* Mobile Device */}
            <div className='flex md:hidden w-full h-full bg-blue-500 p-4'>

            </div>
        </div>
    );
};

export default Header;
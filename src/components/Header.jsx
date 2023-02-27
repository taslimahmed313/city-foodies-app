import { motion } from 'framer-motion';
import React from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

import Avatar from "./img/avatar.png";
import Logo from "./img/logo.png";

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () =>{
        const response = await signInWithPopup(firebaseAuth, provider);
        console.log(response)
    }

    return (
        <div className='fixed z-50 w-screen p-6 px-16'>
            
            {/* Desktop & Tablet Device */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                
                <Link to="/" className='flex items-center gap-2'>
                    <motion.img whileTap={{scale: 0.6}} className='w-8 h-10 object-cover' src={Logo} alt="logo" />
                    <p className=' text-headingColor text-xl font-bold'>City</p>
                </Link>

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

                    <motion.img 
                    whileTap={{scale: 0.6}} 
                    src={Avatar} 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] 
                    drop-shadow-xl cursor-pointer" alt="userprofile" 
                    onClick={login}
                    />
                </div>
            </div>
            

            {/* Mobile Device */}
            <div className='flex md:hidden w-full h-full bg-blue-500 p-4'>

            </div>
        </div>
    );
};

export default Header;
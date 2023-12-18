'use client';

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import UseRegisterModal from '../hooks/useRegisterModal';
import UseLoginModal from '../hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
interface UserMenuProps {
    currentUser?: User | null
}
const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
    const registerModal= UseRegisterModal();
    const loginModal= UseLoginModal();
    const [isOpen, setIsOpen]= useState(false);
    const toggleOpen= useCallback(()=>{
        setIsOpen((value)=> !value);
        
    },[])
    return (
  <div className="relative">
    <div className="flex flex-row items-center gap-3">
       
        <div onClick={()=>{}}  className="hidden md:block text-sm font-semibold  py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
            Airbnb your home
   
        </div>
        
        
        <div onClick={toggleOpen}  className="p-4 md:py-1 md:px-2 border-[1px] border-nuetral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition" >
           <AiOutlineMenu/> 

        </div>
        <div className='hidden md:block '>
            <Avatar/>
        </div>
    </div>
    
    {isOpen  && (
        <div className='absolute rounded-xl shadow-md w-[40vw] overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col  cursor-pointer '>
                {currentUser ?(
                    <>
                    <MenuItem onClick={()=>{}} label="My trips" />
                    <MenuItem onClick={()=>{}} label="Favorites" />
                    <MenuItem onClick={()=>{}} label="My Reservation" />
                    <MenuItem onClick={()=>{}} label="My Properties" />
                    <MenuItem onClick={()=>{}} label="Airbnb my home" />
                    <hr/>
                    <MenuItem onClick={()=>signOut()} label="Logout" />
                    </>
                ): ( <>
                <MenuItem onClick={loginModal.onOpen} label="LOGIN" />
                <MenuItem onClick={registerModal.onOpen} label="SIGN UP" />
                </>)
             }
               


            </div>

        </div>
    )}
    </div>
  );
};

export default UserMenu;

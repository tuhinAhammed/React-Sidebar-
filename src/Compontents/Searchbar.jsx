import React from 'react'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { RiProfileLine } from 'react-icons/ri'
import { MdDashboard, MdEmail, MdChat, } from 'react-icons/md'
import tuhin from "../assets/tuhincdimg.png"
const Searchbar = ({ handleSidebarMenu }) => {
    return (
        <div className=''>
            <div className="relative px-4 !bg-tertiary rounded-md shadow-lg shadow-[#ccc]">

                <div className="flex justify-between items-center">
                    <div className='flex gap-x-4  absolute top-[34%] left-[2%]'>
                        <IoMenu className='text-2xl text-secondary cursor-pointer md:hidden' onClick={handleSidebarMenu} />
                        <IoSearch className='text-2xl text-secondary cursor-pointer' />
                    </div>
                    <input type="text" placeholder='Search (Ctrl+/)' className='text-lg bg-transparent w-[70%] py-4 px-[120px] ' />
                    <div className='flex items-center gap-x-4 '>
                        <MdDashboard className='text-2xl text-secondary cursor-pointer' />
                        <MdEmail className='text-2xl text-secondary cursor-pointer' />
                        <MdChat className='text-2xl text-secondary cursor-pointer' />
                        <img src={tuhin} alt="" className='w-[40px] md:w-[50px] rounded-full ' />
                    </div>
                </div>

            </div>

            <iframe className='mt-6' src="https://tuhindev.vercel.app" width="100%" height="700" ></iframe>
        </div>
    )
}

export default Searchbar


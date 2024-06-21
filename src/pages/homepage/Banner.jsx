import React from 'react'
import group from "../../assets/group1.png"
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='bg w-full h-[60vh] sm:h-dvh flex flex-col md:flex-row relative overflow-hidden text-white'>

            <div className='md:w-[50%] h-full flex flex-col items-center md:items-start justify-center gap-5 pl-5 md:pl-10 lg:pl-20 z-10'>
                <h1 className='w-[70%] md:w-full text-[25px] md:text-5xl pt-[70px] md:pt-0 text-center md:text-start font-bold uppercase'>Welcome to animebook see the world <span className='text-teal-600'>famous</span> anime</h1>
                <button onClick={() => navigate(`explore/all`)} className='text-2xl font-semibold bg-[#BCAC9C] border-none rounded-md px-3 py-2 cursor-pointer hover:bg-pink-400'>Explore</button>
            </div>

            <div className='hidden sm:flex md:w-[50%] h-full justify-center items-end'>
                <img className='w-[250px] md:w-[500px] z-10' src={group} alt="" srcSet="" />
            </div>

            <div className="shadow"></div>

        </div >
    )
}

export default Banner
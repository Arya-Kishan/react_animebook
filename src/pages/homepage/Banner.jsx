import React from 'react'
import group from "../../assets/group1.png"
import blob1 from "../../assets/blob1.svg"
import star1 from "../../assets/star1.svg"
import star2 from "../../assets/star2.svg"
import star3 from "../../assets/star3.svg"
import polygon1 from "../../assets/polygon1.svg"
import polygon2 from "../../assets/polygon2.svg"
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full h-dvh flex flex-col md:flex-row relative overflow-hidden'>

            <div className='md:w-[50%] h-full flex flex-col items-center md:items-start justify-center gap-5 pl-5 md:pl-10 lg:pl-20 z-10'>
                <h1 className='w-[70%] md:w-full text-[25px] md:text-5xl pt-[70px] md:pt-0 text-center md:text-start font-bold uppercase'>Welcome to animebook see the world <span className='text-red-900'>famous</span> anime</h1>
                <button onClick={() => navigate(`explore/all`)} className='text-2xl font-semibold bg-[#BCAC9C] border-none rounded-md px-3 py-2'>Explore</button>
            </div>

            <div className='md:w-[50%] h-full flex justify-center items-end'>
                <img className='w-[250px] md:w-[500px] z-10' src={group} alt="" srcSet="" />
            </div>

            <img className='absolute -bottom-[250px] -right-[250px] rotate-[15deg] w-[1000px] z-5' src={blob1} alt="" srcSet="" />

            <img src={star1} className='absolute top-[10%] left-[10%] w-[20px] h-[20px]'></img>
            <img src={star2} className='absolute top-[20%] left-[20%] w-[20px] h-[20px]'></img>
            <img src={polygon1} className='absolute top-[75%] left-[40%] w-[20px] h-[20px]'></img>
            <img src={star3} className='absolute top-[80%] left-[10%] w-[20px] h-[20px]'></img>
            <img src={polygon2} className='absolute top-[90%] left-[20%] w-[20px] h-[20px]'></img>

        </div>
    )
}

export default Banner
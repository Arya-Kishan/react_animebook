import React from 'react'
import loader from "../assets/loader.svg"
import cat from "../assets/cat.png"

const Loader = () => {
    return (
        <div className='w-full h-dvh flex flex-col justify-center items-center'>
            <img className='w-[70px] h-[70px]' src={loader} alt="" srcset="" />
            <img className='w-[70px] h-[100px]' src={cat} alt="" srcset="" />
        </div>
    )
}

export default Loader
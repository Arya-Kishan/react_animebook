import React from 'react'

const CardImage = ({ src, title }) => {
    return (
        <div className='w-[100%] flex gap-2 justify-center md:justify-between p-4 bg-blue-900'>

            <img className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' src={src} alt="" srcset="" />

            <p className='hidden flex-col md:flex'>
                <span className='font-bold text-4xl text-white capitalize'>{title}</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et modi explicabo ut corporis animi dolor unde saepe esse voluptatum rem.</span>
            </p>

        </div>
    )
}

export default CardImage
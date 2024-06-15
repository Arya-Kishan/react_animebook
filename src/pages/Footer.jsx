import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5 bg-pink-900'>

            <h1 className='text-2xl sm:text-4xl font-bold uppercase px-2 pt-6'>anime book</h1>

            <p className='text-[14px] sm:text-xl text-center px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque laudantium ab consequatur non et accusantium culpa iusto eveniet maiores?</p>

            <div className='sflex justify-center items-center gap-2 px-2'>
                <input onChange={(e) => setInput(e.target.value)} className='p-2' type="text" placeholder='Search Anime...' />
                <button onClick={() => navigate(`/searchPage/${input}`)} className='bg-pink-500 px-4 py-2'>Search</button>
            </div>

            <p className='w-full text-center p-1 bg-gray-500'>@copyrightaryaKishan</p>

        </div>
    )
}

export default Footer
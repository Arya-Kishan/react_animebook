import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5 text-white'>

            <h1 className='text-2xl sm:text-4xl font-bold uppercase px-2 pt-6'>anime book</h1>

            <p className='text-[14px] sm:text-xl text-center px-2'>Dive and Explore the world of anime and Manga a place where all characters plays a real character and face the world </p>

            <div className='sflex justify-center items-center gap-2 px-2'>
                <input onChange={(e) => setInput(e.target.value)} className='p-2' type="text" placeholder='Search Anime...' />
                <button onClick={() => navigate(`/searchPage/${input}`)} className='bg-blue-700 px-4 py-2'>Search</button>
            </div>

            <a target='_blank' href="https://arya-portfilio.netlify.app/" className='w-full text-center p-1 text-white'>@copyrightaryaKishan</a>

        </div>
    )
}

export default Footer
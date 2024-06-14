import React, { useState } from 'react'
import searchIcon from '../assets/searchIcon.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleKeyUp = (e) => {
        if (e.key == "Enter") {
            navigate(`/searchPage/${input}`)
        }
    }

    return (
        <div className='w-full flex justify-between items-center py-3 px-6 fixed top-0 left-0 z-50'>

            <h1 className='text-4xl text-[#6E434D] font-bold uppercase'>animebook</h1>

            <div className='w-[250px] flex justify-end gap-2'>
                <input onChange={(e) => setInput(e.target.value)} onKeyUp={handleKeyUp} className='w-full rounded-md border-none outline-none p-2 hidden md:flex' placeholder='Search Amime...' type="text" name="" id="" />
                <img onClick={() => navigate(`/searchPage/${input}`)} className='w-[30px]' src={searchIcon} alt="" srcSet="" />
            </div>

        </div>
    )
}

export default Navbar
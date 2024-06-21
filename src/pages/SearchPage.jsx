import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';
import cat from '../assets/cat.png'

const SearchPage = () => {

    const params = useParams();
    const [data, setData] = useState(false);

    async function getSearchResult(search) {
        const { data } = await axios(`https://api.jikan.moe/v4/anime?q=${params.search}`)
        console.log(data.data);
        setData(data.data);
    }

    useEffect(() => {
        getSearchResult();
    }, [])


    return (
        <div className='text-white'>

            <h1 className='text-4xl font-semibold capitalize text-center p-6'>{params.search}</h1>

            {data ? <div className='flex gap-5 flex-wrap justify-center'>
                {data && data.map((e) => (<Card key={e.mal_id} obj={e} />))}
            </div> : <div className='w-full h-dvh flex flex-col justify-center items-center'>
                <p>Getting Results...</p>
                <img className='w-[60px] h-[100px]' src={cat} alt="" srcSet="" />
            </div>}

        </div>
    )
}

export default SearchPage
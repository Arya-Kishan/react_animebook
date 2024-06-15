import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FamousCharacters = () => {

    const [data, setData] = useState(false)

    const getFamous = async () => {

        let { data } = await axios(`https://api.jikan.moe/v4/top/characters`)
        console.log(data);
        setData(data.data)

    }

    useEffect(() => {
        setTimeout(() => {
            getFamous();
        }, 2000);
    }, [])

    return (
        <div className='h-[230px] sm:h-[370px] flex flex-col gap-2'>
            <h1 className='text-[18px] sm:text-3xl font-semibold'>Famous Characters</h1>

            <div className='flex gap-2 rounded-lg overflow-x-scroll p-2'>
                {data && data.map((e) => (<div key={e.mal_id} onClick={() => navigate(`/characterDetails/${e.character.mal_id}`)} className='flex flex-col gap-2 w-[120px] sm:w-[200px] bg-white p-2 hover:cursor-pointer flex-shrink-0'>
                    <LazyLoadImage
                        alt=""
                        effect="blur"
                        threshold={100}
                        className={`w-[100px] h-[150px] sm:w-[180px] sm:h-[250px] rounded-lg`}
                        src={e.images.webp.image_url} />
                    <p className='hidden sm:block'>{e.name}</p>
                </div>))}
            </div>
        </div>
    )
}

export default FamousCharacters
import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';

let typeArr = ["tv", "movie", "special", "music", "tv_special"]

const Carousel = ({ filter }) => {

    const [data, setData] = useState(null);


    const getTop = async () => {
        console.log(filter);
        if (filter) {
            let { data } = await axios(`/top/anime?filter=${filter}`)
            console.log(data);
            setData(data.data)
        } else {
            let { data } = await axios("/top/anime")
            console.log(data);
            setData(data.data)
        }
    }

    const getAnimeType = async (type) => {
        console.log(type);

        if (type == "all") {
            getTop();
        }

        if (filter) {
            let { data } = await axios(`/top/anime?filter=${filter}&type=${type}`)
            setData(data.data)
        } else {
            let { data } = await axios(`/top/anime?type=${type}`)
            setData(data.data)
        }
    }

    useEffect(() => {
        getTop();
        // https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv
    }, [filter])

    return (
        <div className='flex flex-col gap-2 overflow-x-scroll p-1 sm:p-4'>
            {data && <>

                <div className='flex justify-between'>

                    <h1 className='uppercase text-1xl sm:text-2xl font-semibold px-2'>{filter ? filter : "Trending"}</h1>

                    <select onChange={(e) => getAnimeType(e.target.value)} name="" id="">
                        <option className='capitalize' value={'all'}>{'All'}</option>
                        {typeArr.map((e) => (
                            <option key={e} className='capitalize' value={e}>{e}</option>
                        ))}
                    </select>

                </div>

                <div className='flex gap-2 sm:gap-5 overflow-x-scroll overflow-y-hidden category p-2'>
                    {data?.map((e) => (
                        <Card key={e.mal_id} obj={e} />
                    ))}
                </div>

            </>}
        </div>
    )
}

export default Carousel
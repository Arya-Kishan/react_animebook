import React, { useEffect, useState } from 'react'
import Card from './Card';
import { getTop } from '../Services_Api';

const Carousel = ({ filter }) => {

    const [data, setData] = useState(null);

    async function getData() {
        let res = await getTop(filter)
        console.log(res);
        setData(res.data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='flex gap-5 overflow-scroll p-4'>
            {data?.map((e) => (
                <Card obj={e} />
            ))}
        </div>
    )
}

export default Carousel
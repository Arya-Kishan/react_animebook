import React from 'react'
import Banner from './Banner'
import Carousel from '../../components/Carousel'

const arr = [null, "upcoming", "bypopularity"]

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Banner />

            <div className='flex flex-col'>
                {arr.map((e) => (
                    <div>
                        <h1 className='uppercase text-2xl font-semibold px-2'>{e ? e : "Trending"}</h1>
                        <Carousel filter={e} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
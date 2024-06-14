import React from 'react'
import Banner from './Banner'
import Carousel from '../../components/Carousel'
import Navbar from '../Navbar'

const arr = [false, "upcoming", "bypopularity"]

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Navbar />
            <Banner />
            <div className='flex flex-col'>
                {arr.map((e) => (
                    <div key={e}>
                        <Carousel filter={e} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
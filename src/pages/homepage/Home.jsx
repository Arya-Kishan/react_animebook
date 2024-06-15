import React from 'react'
import Banner from './Banner'
import Carousel from '../../components/Carousel'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FamousCharacters from './FamousCharacters'

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
            <FamousCharacters />
            <Footer />
        </div>
    )
}

export default Home
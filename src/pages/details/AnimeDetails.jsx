import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyImage from '../../components/MyImage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Recommendation from '../../components/Recommendation';
import AllCharacters from '../../components/AllCharacters';


const AnimeDetails = () => {

    const [data, setData] = useState(false)
    const [more, setMore] = useState(false)
    const [morePics, setMorePics] = useState(false)
    const [moreVideos, setMoreVideos] = useState(false)


    const params = useParams();

    const getAnimeDetails = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}`)
        setData(data.data)
    }

    const getMorePictures = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/pictures`)
        setMorePics(data.data)
    }

    const getMoreVideos = async (animeId) => {
        let { data } = await axios(`/anime/${params.animeId}/videos`)
        setMoreVideos(data.data?.promo)
    }

    useEffect(() => {
        getAnimeDetails();
        setTimeout(() => {
            getMorePictures();
        }, 1000);

        setTimeout(() => {
            getMoreVideos();
        }, 2000);

    }, [params])

    return (
        <div>
            <div className='flex flex-col gap-20 p-8 pt-[20px] sm:pt-[100px]'>

                {/* DETIALS */}
                {data && <div className='flex flex-col sm:flex-row gap-5'>

                    <div className='flex justify-center items-center'>
                        <LazyLoadImage
                            alt=""
                            effect="blur"
                            threshold={100}
                            className={`w-[500px] rounded-lg`}
                            src={data.images.webp.large_image_url} />
                    </div>

                    <div className='flex flex-col gap-2 justify-evenly items-start text-[15px] sm:text-[20px]'>
                        <p>Title : <span className='text-red-600'>{data.title}</span></p>
                        <p>Source : <span className='text-red-600'>{data.source}</span></p>
                        <p>Duration : <span className='text-red-600'>{data.duration}</span></p>
                        <p>Rating : <span className='text-red-600'>{data.score}</span></p>
                        <p className='text-yellow-200 flex gap-4'>{data.genres.map((e) => (<span key={e.mal_id} className='bg-teal-500 rounded-md px-2 py-1'>{e.name}</span>))}</p>
                        <p>Description : <span className='text-red-600'>{data?.synopsis?.split(" ").slice(0, 25).join(" ")}</span> <span className='text-1xl text-gray-400 cursor-pointer' onClick={() => setMore(!more)}>Read more...</span></p>
                    </div>
                </div>}

                {/* MORE PHOTOS */}
                {morePics && <div className='h-[250px] sm:h-[360px] flex flex-col gap-2 overflow-scroll'>
                    <h1 className='text-2xl sm:text-4xl font-bold'>Photos</h1>
                    <div className='w-full flex gap-5'>
                        {morePics.map((e, i) => (
                            <div className='flex-shrink-0'>
                                <LazyLoadImage
                                    key={i}
                                    alt=""
                                    effect="blur"
                                    threshold={100}
                                    className={`w-[130px] h-[200px] sm:w-[200px] sm:h-[300px] flex-shrink-0 rounded-lg`}
                                    src={e.webp.image_url} />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* SHOWING YOUTUBE VIDEOS */}
                {data && data.trailer.embed_url && <div className='flex justify-center items-center'>
                    <iframe className='w-[250px] h-[200px] sm:w-[600px] sm:h-[400px] bg-white p-4' src={data.trailer.embed_url} frameBorder="0"></iframe>
                </div>}

                {/* MORE VIDEOS */}
                {moreVideos && moreVideos.length > 0 && <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl sm:text-4xl font-bold Photos'>Videos</h1>
                    <div className='flex gap-2 overflow-scroll'>
                        {moreVideos.map((e) => (<div key={e.mal_id} className='flex-shrink-0'>
                            <iframe className='w-[150px] h-[100px] sm:w-[300px] sm:h-[200px] bg-white p-4' src={e.trailer.embed_url + "?autoplay=0"} frameBorder="0"></iframe>
                        </div>))}
                    </div>
                </div>}

                {/* SHOWING ALL CHARACTERS */}
                <AllCharacters animeId={params.animeId} />

                {/* SHOWING RECOMMENDATION */}
                <Recommendation animeId={params.animeId} />

                {/* POP BOX TO SHOW FULL DESCRIPTION */}
                {
                    more && <div onClick={() => setMore(!more)} className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-black p-10 overflow-scroll'>
                        <div onClick={(e) => e.stopPropagation()} className='w-[60%] h-[70%] text-white bg-pink-500 p-5 rounded-lg'>{data.synopsis}</div>
                    </div>
                }

            </div >
        </div >
    )
}

export default AnimeDetails
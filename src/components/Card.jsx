import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyImage from './MyImage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ obj }) => {

  const navigate = useNavigate()

  const handleCardClick = (animeId) => {
    navigate(`/animeDetails/${animeId}`)
  }

  return (
    <div onClick={() => handleCardClick(obj.mal_id)} className='w-[100px] sm:w-[250px] flex flex-col gap-2 relative flex-shrink-0 bg-white p-2 text-[15px]'>

      <LazyLoadImage
        alt=""
        effect="blur"
        threshold={100}
        className={`w-[80px] sm:w-[248px] h-[116px] sm:h-[320px] rounded-lg`}
        src={obj.images.webp.image_url} />

      <span className='hidden sm:block'>{obj.title.split(" ").slice(0, 2).join(" ")}</span>

      {obj.score && <span className='absolute top-3 right-6 bg-teal-500 rounded-lg text-[12px] px-2 py-1 sm:p-2 text-white'>{obj.score}</span>}

    </div>
  )
}

export default Card
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyImage from './MyImage'

const Card = ({ obj }) => {

  const navigate = useNavigate()

  const handleCardClick = (animeId) => {
    navigate(`/animeDetails/${animeId}`)
  }

  return (
    <div onClick={() => handleCardClick(obj.mal_id)} className='w-[100px] sm:w-[250px] flex flex-col gap-2 relative flex-shrink-0 bg-white p-2 text-[15px]'>
      <div className='w-[80px] sm:w-[248px] h-[116px] sm:h-[350px]'><MyImage src={obj.images.webp.image_url} width={"248px"} height={"350px"} /></div>
      <span className='hidden sm:block'>{obj.title.split(" ").slice(0, 2).join(" ")}</span>
      <span className='absolute top-2 right-2 bg-teal-800 rounded-lg text-[12px] px-2 py-1 sm:px-4 sm:py-2 text-white'>{obj.score}</span>
    </div>
  )
}

export default Card
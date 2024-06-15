import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyImage from '../../components/MyImage'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CharacterDetails = () => {

  const [detail, setDetail] = useState(null)
  const [pics, setPics] = useState(null)

  const params = useParams();

  const getCharacterDetails = async () => {
    let { data } = await axios(`https://api.jikan.moe/v4/characters/${params.characterId}`)
    console.log(data);
    setDetail(data.data)
  }

  const getCharacterPictures = async () => {
    let { data } = await axios(`https://api.jikan.moe/v4/characters/${params.characterId}/pictures`)
    setPics(data.data)
    console.log(data);
  }


  useEffect(() => {
    getCharacterDetails();
    getCharacterPictures();
  }, [])

  return (
    <div className='w-full h-dvh flex justify-center items-center p-2 md:p-10 overflow-scroll'>
      {detail && pics
        ?
        <div className='flex flex-col gap-10'>

          <div className='w-[70vw] flex flex-col md:flex-row items-center gap-10'>

            <img className='w-[200px] h-[300px] md:w-[300px] md:h-[400px]' src={pics[0].jpg.image_url} alt="" srcSet="" />

            <div>
              <p>Name : <span>{detail.name} {detail.name_kanji}</span></p>
              <p>About : <span>{detail.about.split(" ").slice(0, 80).join(" ")}</span></p>
            </div>

          </div>

          <div className='w-[70vw] flex gap-5 overflow-x-scroll overflow-y-hidden'>
            {pics.map((e, i) => (<div key={i} className='flex-shrink-0'>
              <LazyLoadImage
                alt=""
                effect="blur"
                threshold={100}
                className={`w-[100px] h-[150px] rounded-lg`}
                src={e.jpg.image_url} />
            </div>))}
          </div>

        </div>
        :
        "loading...."}
    </div>
  )
}

export default CharacterDetails
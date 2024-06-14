import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyImage from '../../components/MyImage'

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
    <div className='w-full h-dvh flex justify-center items-center p-2 md:p-10 overflow-hidden'>
      {detail && pics
        ?
        <div className='flex flex-col gap-10'>

          <div className='w-[70vw] flex flex-col md:flex-row items-center gap-10'>

            <img className='w-[200px] h-[300px] md:w-[300px] md:h-[400px]' src={pics[0].jpg.image_url} alt="" srcset="" />

            <div>
              <p>Name : <span>{detail.name} {detail.name_kanji}</span></p>
              <p>About : <span>{detail.about.split(" ").slice(0, 80).join(" ")}</span></p>
            </div>

          </div>

          <div className='w-[70vw] flex gap-5 overflow-x-scroll overflow-y-hidden'>
            {pics.map((e, i) => (<div key={i} className='flex-shrink-0'>
              <MyImage src={e.jpg.image_url} width={"100px"} height={"150px"} />
            </div>))}
          </div>

        </div>
        :
        "loading...."}
    </div>
  )
}

export default CharacterDetails
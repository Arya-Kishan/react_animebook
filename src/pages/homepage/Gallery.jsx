import React from 'react'
import cute1 from '../../assets/cute1.png'
import cute2 from '../../assets/cute2.png'
import cute3 from '../../assets/cute3.png'
import cute4 from '../../assets/cute4.png'
import CardImage from '../../components/CardImage'

const Gallery = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-2 p-2'>

            <div className='w-full flex gap-2'>
                <CardImage src={cute1} title={"attack on titan"} />
                <CardImage src={cute2} title={"Demon slayer"} />
            </div>

            <div className='w-full flex gap-2'>
                <CardImage src={cute3} title={"jujtsu kaisen"} />
                <CardImage src={cute4} title={"one piece"} />
            </div>

        </div>
    )
}

export default Gallery
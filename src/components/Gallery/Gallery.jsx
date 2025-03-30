import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/uni2.jpg'
import gallery_2 from '../../assets/uni3.jpg'
import gallery_3 from '../../assets/uni4.jpg'
import gallery_4 from '../../assets/uni5.jpg'
import gallery_5 from '../../assets/uni6.jpg'
import gallery_6 from '../../assets/uni7.jpg'
import gallery_7 from '../../assets/uni8.jpg'
import gallery_8 from '../../assets/uni9.jpg'
import white_arrow from '../../assets/white_arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <div className="gallery">
            <img src={gallery_5} alt=""/>
            <img src={gallery_6} alt=""/>
            <img src={gallery_7} alt=""/>
            <img src={gallery_8} alt=""/>
        </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus

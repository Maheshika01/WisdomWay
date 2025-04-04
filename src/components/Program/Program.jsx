import React from 'react'
import './Program.css'
import program_1 from '../../assets/pic1.jpg'
import program_2 from '../../assets/pic2.jpg'
import program_3 from '../../assets/pic3.jpg'
import program_icon_1 from '../../assets/icon1.png'
import program_icon_2 from '../../assets/icon2.png'
import program_icon_3 from '../../assets/icon3.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt=""/>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=""/>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt=""/>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post Graduation </p>
            </div>
        </div>
    </div>
  )
}

export default Program

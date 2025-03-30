import React from 'react'
import './About.css'
import about_img from '../../assets/uni.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
      <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus maxime fugit in perspiciatis ipsa. Aut saepe nisi eum deserunt fugiat iure praesentium cum, dolores animi ab assumenda, sapiente obcaecati.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus maxime fugit in perspiciatis ipsa. Aut saepe nisi eum deserunt fugiat iure praesentium cum, dolores animi ab assumenda, sapiente obcaecati.lorem</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere quisquam ab asperiores harum id nihil nostrum adipisci amet eius ipsa libero ratione eos ad reiciendis officia dolorum, beatae culpa.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic? Atque, necessitatibus, facere ullam nostrum autem nulla ea reiciendis odit minima provident dolorem consequuntur modi exercitationem porro distinctio molestias expedita.</p>
      </div>
    </div>
  )
}

export default About

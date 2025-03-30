import React from 'react'
import './Hero.css'
import arrow from '../../assets/white_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="div hero-text">
        <h1>Your Journey to Excellence Begins Here.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempora cum sunt ea ipsum. Commodi alias nihil iusto minus quasi, quaerat maxime perferendis eaque ducimus velit, reiciendis, in fugiat inventore!</p>
        <button className='btn'>Explore more <img src={arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero

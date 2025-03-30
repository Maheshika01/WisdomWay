import React, { useRef } from 'react'
import './Testimonials.css'
import next_arrow from '../../assets/next.png'
import back_arrow from '../../assets/back.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user4.jpg'


const Testimonials = () => {

    const slider = useRef();
    let tx  = 0;
const slideForward =() => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward =() => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

 return (
    <div className='testimonials'>
        <img src={next_arrow} alt="" className='next-btn' onClick={slideForward}/>      
        <img src={back_arrow} alt="" className='back-btn' onClick={slideBackward}/>      
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                             <img src={user_1} alt="" />
                            <div>
                                <h3>Zara Harizon</h3>
                                <span>WisdomWay, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus assumenda accusamus nemo vel quos nihil incidunt? Fuga assumenda ullam illum quos incidunt? Pariatur, sint! Eum tempore earum consequatur iusto!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                             <img src={user_2} alt="" />
                            <div>
                                <h3>John Smith</h3>
                                <span>WisdomWay, AUSTRAILA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus assumenda accusamus nemo vel quos nihil incidunt? Fuga assumenda ullam illum quos incidunt? Pariatur, sint! Eum tempore earum consequatur iusto!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                             <img src={user_3} alt="" />
                            <div>
                                <h3>Cathy Sandberg</h3>
                                <span>WisdomWay, CANADA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus assumenda accusamus nemo vel quos nihil incidunt? Fuga assumenda ullam illum quos incidunt? Pariatur, sint! Eum tempore earum consequatur iusto!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                             <img src={user_4} alt="" />
                            <div>
                                <h3>David Hartley</h3>
                                <span>WisdomWay, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus assumenda accusamus nemo vel quos nihil incidunt? Fuga assumenda ullam illum quos incidunt? Pariatur, sint! Eum tempore earum consequatur iusto!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials

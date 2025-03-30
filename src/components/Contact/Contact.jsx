import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg.png'
import mail_icon from '../../assets/email.png'
import phone_icon from '../../assets/phone-call.png'
import location_icon from '../../assets/location.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b2329368-18d7-4d96-9a95-8dafeb124dbd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloribus! Quae fugit praesentium consequuntur consectetur sint exercitationem odio voluptatum dicta pariatur nisi officiis dolore magnam, iusto, a accusamus vitae illum?</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" />+94 125 864 148</li>
                <li><img src={location_icon} alt="" />99 Mathew Ave, Cambridge<br/> MA 0125, Sri Lanka</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="text" name='phone' placeholder='Enter your mobile number' required/>
            <labe>Write your message here</labe>
            <textarea name="message" rows="10" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

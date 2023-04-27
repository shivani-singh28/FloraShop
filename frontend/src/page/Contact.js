import React from 'react'
import './contact.css'

const Contact = () => {
  return (
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me : </h1>
                    <div className='con'>
                      <p><i className="fa-solid fa-paper-plane"></i>look4nandinisingh@gmail.com</p>
                      <p><i className="fa-solid fa-phone"></i>8171663075</p>
                    </div>
                    <div className='con'>
                      <p><i className="fa-solid fa-paper-plane"></i>look4nandinisingh@gmail.com</p>
                      <p><i className="fa-solid fa-phone"></i>8171663075</p>
                    </div>
                    <div className='con'>
                      <p><i className="fa-solid fa-paper-plane"></i>look4nandinisingh@gmail.com</p>
                      <p><i className="fa-solid fa-phone"></i>8171663075</p>
                    </div>
                    <div className='con'>
                      <p><i className="fa-solid fa-paper-plane"></i>look4nandinisingh@gmail.com</p>
                      <p><i className="fa-solid fa-phone"></i>8171663075</p>
                    </div>

                    
                </div>
                <div className="contact-right">
                    <form name="submit-to-google-sheet" >
                        <input className='inp' type="text" name="Name" placeholder="Your Name" required/>
                        <input className='inp' type="email" name="Email" placeholder="Your Email" required/>
                        <textarea  name="Message" rows="6" placeholder="Your Message"></textarea>
                        <textarea  name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2" style={{backgroundColor:'skyblue'}}>Submit</button>
                    </form>
                    <span id="confirmmsg"></span>
                </div>
            </div>

  )
}

export default Contact
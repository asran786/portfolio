import "./contact.css"
import { assets } from '../../src/assets/assets'
import { useState } from "react";

const Contact = () => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    // e.g., send data to backend or handle locally
    console.log(`Email: ${email}, Phone: ${phone}, Message: ${message}`);
    setFormStatus('Message sent successfully!');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  return (
    <div className='contact'>
      <h1>Contacts</h1>
      <div className="contact-items">
        <div className="linkedin">
           <a target="_blank" href="https://www.linkedin.com/in/mohd-asran">
           <img src={assets.linkedin} alt="" />
          <p>LinkedIn</p></a>
          <a target="_blank"  href="mailto:mo.asran.0102@gmail.com">
           <img className="gmail" src={assets.gmail} alt="" />
          <p className="gmail-p">mo.asran.0102@gmail.com</p></a>
          <a target="_blank"  href="tel:+916388053770">
           <img className="phone" src={assets.phone} alt="" />
          <p>+916388053770</p></a>
          <a target="_blank"  href="https://github.com/asran786">
           <img src={assets.git} alt="" />
          <p>Git Hub</p></a>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="email-phone">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="email-phone">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
           <button className="btn-contact" type="submit">Send Message</button>
       
      </form>

      </div>
    </div>
  )
}

export default Contact

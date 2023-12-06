import React, { useRef } from "react";
import "./contact.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5nncuug', 'template_fb82ssp', form.current, 'p27Hz441c4kj_4K2S')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Your message has been sent!");
          }, (error) => {
              console.log(error.text);
          });
        };
    return (
        <section id="contactPage">
            {/* <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientsDesc">Coming soon...</p>
                <div className="clientImgs">
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I'm currently available for freelance work or job opportunities. Please fill out the form below</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" />
                    <input type="email" className="email" placeholder="Your Email" name="from_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message" />
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/marquise-campbell/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/MarquiseTC" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Github" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
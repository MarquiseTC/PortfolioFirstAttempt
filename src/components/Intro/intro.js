import React from 'react';
import './intro.css';
import result from '../../assets/result2.png'
import { Link } from 'react-scroll';
import approval from '../../assets/approval.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Marquise</span> <br />Full Stack Developer</span>
                <p className="introPara">I am a full stack developer with experience working <br /> with JavaScript, C#, and React</p>
                <Link><button className="btn"><img src={approval} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
                </div>
                <img src={result} alt="Profile" className="bg" />
                </section>
        
    )
}

export default Intro;
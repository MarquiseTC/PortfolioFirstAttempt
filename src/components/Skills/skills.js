import React from 'react';
import './skills.css';
import CodeFile from '../../assets/codeFile.png'
import BusinessReport from '../../assets/businessReport.png'
import Document from '../../assets/document.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">I am a full stack developer with experience working with JavaScript, C#, and React</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={CodeFile} alt="codeFile" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Front End Development</h2>
                            <p>Example akhsdkahlsdjlajsd;jajojd;ajd;mamdawmdd</p>
                        </div>
                    </div>
                
                <div className="skillBar">
                        <img src={BusinessReport} alt="businessReport" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Back End Development</h2>
                            <p>Example akshdkahlanflalwnfianalslkfbkjafb</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={Document} alt="document" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Analytics</h2>
                            <p>Exakjsbdkahdoniwandolnalbbfajbflnalbfblfnsknsfaofhnsfn</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Skills
import React, { Component } from 'react'
import './Resume.scss'

export default class Resume extends Component {
    render() {
        return (
            <div id='resume' className='resume'>
                <div className='resume-break'></div>

                {/* <label className='resume-title'>About</label>
                <div className='resume-about'>Full Stack Developer that seeks answers to the problems that need to be solved. Desires growth to create beautiful programs and systems that can tell the stories of the teams who created them and those that are using them. With frontend, backend, and team conscious skills - let's cultivate storytelling in our technology together.</div> */}

                <label className='resume-title'>Skills</label>
                <div className='resume-skills-box'>
                    <img className='resume-skill-1' src='https://www.juicymedia.co.uk/application/files/4615/1838/4923/html_css_js.png' />
                    <img className='resume-skill-2' src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' />
                    <img className='resume-skill-3' src='https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png' />
                    <img className='resume-skill-4' src='https://www.barrownz.com/Content/Images/Logos/NodeJSLogo.png' />
                    <img className='resume-skill-5' src='https://cdn.worldvectorlogo.com/logos/react.svg' />
                </div>

                <div className='resume-skills'>
                    <table>
                        <tr>
                            <th className='table-title'>General</th>
                            <th className='table-title'>Front End</th>
                            <th className='table-title'>Back End</th>
                            <th className='table-title'>Other</th>
                        </tr>
                        <tr>
                            <th className='table-item'>NodeJS</th>
                            <th className='table-item'>React</th>
                            <th className='table-item'>Django</th>
                            <th className='table-item'>Microsoft Office</th>
                        </tr>
                        <tr>
                            <th className='table-item'>Git</th>
                            <th className='table-item'>JavaScript</th>
                            <th className='table-item'>Python</th>
                            <th className='table-item'>Adobe Suite</th>
                        </tr>
                        <tr>
                            <th className='table-item'>ExpressJS</th>
                            <th className='table-item'>HTML5</th>
                            <th className='table-item'>PostgreSQL</th>
                            <th className='table-item'>Customer Service</th>
                        </tr>
                        <tr>
                            <th className='table-item'>REST API</th>
                            <th className='table-item'>CSS3</th>
                            <th className='table-item'>SQL</th>
                            <th className='table-item'>Team Building</th>
                        </tr>
                        <tr>
                            <th className='table-item'>Object-Oriented Programming</th>
                            <th className='table-item'>SCSS / SASS</th>
                            <th className='table-item'>MongoDB</th>
                            <th className='table-item'>Communication</th>
                        </tr>
                        <tr>
                            <th className='table-item'>Agile Methodologies</th>
                            <th className='table-item'>Bootstrap</th>
                            <th className='table-item'>AJAX</th>
                            <th className='table-item'>Research</th>
                        </tr>
                    </table>
                </div>

                {/* <label className='resume-title'>Education</label>
                <div className='resume-education'>
                    <div className='education-title'>General Assembly</div>
                    <div className='education-subtitle'>Software Engineer Immersive Bootcamp: Full-Stack Developer Program</div>
                    <li>Created real world applications and learned modern tools to build and problem solve.</li>
                    <li>Generated skills and knowledge in multiple stacks to prepare for real world application.</li>
                    <li>Learned to pursue growth and find the necessary answers through communication.</li>

                    <div className='education-title'>SC Governor's School for the Arts & Humanities</div>
                    <div className='education-subtitle'>Film, Animation, Design, and Sound Engineering</div>
                    <li>Learned importance of growth mindset in the workplace and working efficiently with a team.</li>
                    <li>Gained proficiency in design theory and how to construct eye catching products.</li> */}
                {/* </div> */}
            </div >
        )
    }
}

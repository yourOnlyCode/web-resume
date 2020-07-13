import React, { Component } from 'react'

import './Projects.scss'
 
export default class Projects extends Component {

    state = {
        projectClick: false,
    }

    onClickProject = () => {
        this.setState({ projectClick: true })
    }

    render() {
        return (
            <div id='projects' className='projects'>
                <div className='project-title'>Projects</div>

                <div className='projects-container'>


                    <a className='project-container'>
                        <div className='project-title-container'>
                            <div className='project-name'>BlackJack</div>
                            <div className='project-box' id='blackjack-box' blurRadius={1}>

                            </div>
                            <a className='project-item'
                                href='https://github.com/yourOnlyCode/project-blackjack'
                                target="_blank">
                                <img className='project-social'
                                    src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />Github
                                </a>
                            <a className='project-item'
                                href='https://youronlyblackjack.netlify.com/'
                                target="_blank">
                                <img className='project-social'
                                    src='https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/11987465721551941710-512.png' />App
                                </a>
                        </div>
                    </a>


                    <a className='project-container'>
                        <div className='project-title-container'>
                            <div className='project-name'>Rotten Bananas</div>
                            <div className='project-box' id='bananas-box'>

                            </div>
                            <a className='project-item'
                                href='https://github.com/yourOnlyCode/rotten-bananas'
                                target="_blank">
                                <img className='project-social'
                                    src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />Github
                                </a>
                            <a className='project-item'
                                href='https://rotten-bananas-review.herokuapp.com/games'
                                target="_blank">
                                <img className='project-social'
                                    src='https://image.flaticon.com/icons/png/512/873/873120.png' />App
                                </a>
                        </div>
                    </a>


                    <a className='project-container'>
                        <div className='project-title-container'>
                            <div className='project-name'>ParkPal (MERN)</div>
                            <div className='project-box' id='parkpal-box'>

                            </div>
                            <a className='project-item'
                                href='https://github.com/yourOnlyCode/parking-app'
                                target="_blank">
                                <img className='project-social'
                                    src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />Github
                                </a>
                            <a className='project-item'
                                href='https://park-pal.herokuapp.com/'
                                target="_blank">
                                <img className='project-social'
                                    src='https://image.flaticon.com/icons/png/512/873/873120.png' />App
                                </a>
                        </div>
                    </a>


                    {/* <a className='project-container'>
                        <div className='project-title-container'>
                            <div className='project-name'>ParkPal (Django)</div>
                            <div className='project-box' id='parkpal-box'>

                                <a className='project-item'
                                    href='https://github.com/yourOnlyCode/parking-app'
                                    target="_blank">
                                    <img className='project-social'
                                        src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />Github
                                </a>
                                <a className='project-item'
                                    href='https://park-pal.herokuapp.com/'
                                    target="_blank">
                                    <img className='project-social'
                                        src='https://image.flaticon.com/icons/png/512/873/873120.png' />App
                                </a>
                            </div>
                        </div>
                    </a> */}


                    <a className='project-container'>
                        <div className='project-title-container'>
                            <div className='project-name'>Game Pitch</div>
                            <div className='project-box' id='gamepitch-box'>

                            </div>
                            <a className='project-item'
                                href='https://github.com/yourOnlyCode/gamepitch'
                                target="_blank">
                                <img className='project-social'
                                    src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />Github
                                </a>
                            <a className='project-item'
                                href='https://gamepitch.herokuapp.com/explore'
                                target="_blank">
                                <img className='project-social'
                                    src='https://image.flaticon.com/icons/png/512/873/873120.png' />App
                                </a>
                        </div>
                    </a>

                </div>

            </div>
        )
    }
}

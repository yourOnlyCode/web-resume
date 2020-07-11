import React, { Component } from 'react'

import './Connect.scss'

export default class Connect extends Component {
    render() {
        return (
            <div className='connect' id="connect">

                <label className='connect-title'>About</label>


                <div className='connect-container'>

                    <div className='image-info-container'>

                        <img className='me' src={process.env.PUBLIC_URL + '/images/1.jpg'} />

                        <div className='info-container'>

                            <div className='info' id='info-name'>
                                <label>Matthew Mullin</label>
                            </div>

                            <div className='info'>
                                <label>Download Resume:</label>
                                <a
                                    className='resume'
                                    href='/images/matthewMullinResume.pdf' download>
                                    PDF
                            </a>

                                <a
                                    className='resume'
                                    href='/images/matthewMullinResume.docx' download>
                                    DOCx
                            </a>
                            </div>

                            <div className='info'>
                                <label>Email:</label>
                                <address>
                                    <a
                                        className='email'
                                        href="mailto:matty_mullin@outlook.com">Matty_Mullin@outlook.com
                            </a>
                                </address>
                            </div>

                            <div className='info'>
                                <label>Contact:</label>
                                <div className='phone'>(816) 686-0198</div>
                            </div>


                        </div>

                    </div>

                    <label className='cert-title'>Certificates</label>
                    <label className='cert-view'>Click to View</label>
                    <div className='cert-container'>


                        <a className='lightbox' href='#cert-ga'>
                            <img
                                src='/images/GACertificate.jpg'
                            />
                        </a>
                        <div class='lightbox-target' id='cert-ga'>
                            <img
                                src='/images/GACertificate.jpg'
                            />
                            <a className='lightbox-close' href='#connect'>
                            </a>

                        </div>


                        <a className='lightbox' href='#cert-access'>
                            <img
                                src='/images/Accessibility.jpg'
                            />
                        </a>
                        <div class='lightbox-target' id='cert-access'>
                            <img
                                src='/images/Accessibility.jpg'
                            />
                            <a className='lightbox-close' href='#connect'>
                            </a>

                        </div>


                        <a className='lightbox' href='#cert-full'>
                            <img
                                src='/images/FullStack.jpg'
                            />
                        </a>
                        <div class='lightbox-target' id='cert-full'>
                            <img
                                src='/images/FullStack.jpg'
                            />
                            <a className='lightbox-close' href='#connect'>
                            </a>

                        </div>


                        <a className='lightbox' href='#cert-webdesign'>
                            <img
                                src='/images/UXWebDesign.jpg'
                            />
                        </a>
                        <div class='lightbox-target' id='cert-webdesign'>
                            <img
                                src='/images/UXWebDesign.jpg'
                            />
                            <a className='lightbox-close' href='#connect'>
                            </a>

                        </div>




                    </div>
                </div>
            </div >
        )
    }
}

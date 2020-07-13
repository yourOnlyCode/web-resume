import React, { Component } from 'react'

import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='social-box'>
                    <a href="https://www.linkedin.com/in/matthewmullin-oh/" target="_blank">
                        <img className='social' src='https://image.flaticon.com/icons/png/512/174/174857.png' />
                    </a>

                    <a href="https://github.com/yourOnlyCode" target="_blank">
                        <img className='social' src='https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png' />
                    </a>

                    <a href="https://twitter.com/yourOnlyCode" target="_blank">
                        <img className='social' src='https://picklefeetgames.com/wp-content/uploads/2018/12/twitter-app-icon-transparent-17-2.png' />
                    </a>
                </div>
            </div>
        )
    }
}

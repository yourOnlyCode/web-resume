import React from 'react';
import './App.scss';

import Bio from './components/Bio/Bio.js'
import Projects from './components/Projects/Projects.js'
import Resume from './components/Resume/Resume.js'
import Connect from './components/Connect/Connect.js'
import Footer from './components/Footer/Footer.js'

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <div className='navbar'>

          <div className='my-name'>MatthewMullin</div>

          <div className='navlink-box'>
            <a className='navlink' href="#resume">Skills</a>
            <a className='navlink' href="#projects">Projects</a>
            <a className='navlink' href="#connect">About</a>
          </div>

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

          <a className='navlink-top' href="#">
            <span class="material-icons" id='top'>
              arrow_drop_up
            </span>
          </a>

        </div >

        <Bio />
        <Resume />
        <Projects />
        <Connect />
        <Footer />

      </div >

    );
  }
}

export default App;

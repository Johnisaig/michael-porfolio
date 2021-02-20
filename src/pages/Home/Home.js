import React from 'react'

import Particles from 'components/background'
import socialData from 'vars/social'

import atom from 'assets/images/atom.png'
import space from 'assets/images/space.png'

import './Home.scss'

export default function Home() {
  return (
    <div className="App">
      <Particles />
      <div className="header">
        <img src={atom} alt="" className="App-logo" style={{ width: '10%' }} />
      </div>
      <div className="content">
        <div className="info">
          <h1>Hi, I'm Michael Isaig</h1>
          <h2>Software Engineer</h2>
          <p>
            My porfolio is currenty in proggress. please notify me on my social
            media accounts.
          </p>
          <div className="spacer-line" />
          <div className="social-media">
            <ul>
              {socialData.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.path} target="blank">
                      <img src={item.icon} alt="" width={35} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div />
        <div />
      </div>
      <div className="footer">
        <p>©2021 Comming soon, Website Build from ReactJS</p>
      </div>
      <img src={space} alt="" className="space-man" />
    </div>
  )
}

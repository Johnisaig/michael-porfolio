import React from 'react'

import Particles from 'components/background'

import './NotFound.scss'

export default function NotFound() {
  return (
    <div className="mainContent">
      <Particles />
      <div className="notFoundContent">
        <div className="info">
          <h1>404</h1>
          <h2>PAGE NOT FOUND!</h2>
          <button className="goBack" onClick={() => (window.location = '/')}>
            <span>BACK TO HOMPAGE</span>
          </button>
        </div>
        <div />
      </div>
    </div>
  )
}

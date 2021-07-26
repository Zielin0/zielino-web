import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Main() {
  useEffect(() => {
    document.title = 'Zielino:~$'
  }, [])

  return (
    <>
      <div className="main-container">
        <nav className="nav">
          <ul>
            <li id="about">
              <Link to="/about" className="about-btn">
                /o-mnie
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1>
            Zielino<span className="colon">:</span>
            <span className="track">~</span>$<span className="cursor">|</span>
          </h1>
          <h3>Social Media</h3>
          <ul className="socials">
            <li>
              <a href="https://www.youtube.com/channel/UCakn5eq0LuKV3CMdnAc2aig">
                <i className="fab fa-youtube"></i>YouTube
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/theZielino">
                <i className="fab fa-twitter"></i>Twitter
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Zielin0">
                <i className="fab fa-github"></i>GitHub
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}

export default Main

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import '../App.css'

function Main() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Zielino:~$'
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {loading ? (
        <div className="preloader">
          <ScaleLoader
            height={140}
            width={16}
            radius={8}
            margin={8}
            color={'#ff0d8e'}
            loading={loading}
          />
        </div>
      ) : (
        <div className="all-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#343434"
              fill-opacity="1"
              d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,96C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
          <div className="main-container">
            <nav className="nav">
              <ul>
                <li id="about">
                  <span className="cmd">cd</span>
                  <Link to="/about" className="about-btn">
                    &nbsp;about/
                  </Link>
                </li>
              </ul>
            </nav>

            <main>
              <h1>
                Zielino<span className="colon">:</span>
                <span className="track">~</span>$
                <span className="cursor">|</span>
              </h1>
              <h3>Social Media</h3>
              <ul className="socials">
                <li>
                  <a href="https://www.youtube.com/channel/UCakn5eq0LuKV3CMdnAc2aig">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/theZielino">Twitter</a>
                </li>
                <li>
                  <a href="https://github.com/Zielin0">GitHub</a>
                </li>
              </ul>
            </main>
          </div>
          <svg
            className="wave-bottom"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#343434"
              fill-opacity="1"
              d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,181.3C840,160,960,128,1080,133.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
    </>
  )
}

export default Main

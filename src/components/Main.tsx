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
        </div>
      )}
    </>
  )
}

export default Main

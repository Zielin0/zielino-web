import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
  useEffect(() => {
    document.title = 'Zielino:/o-mnie$'
  }, [])

  return (
    <div className="main-container">
      <h1 className="about-h">
        Zielino<span className="colon">:</span>
        <span className="track">/o-mnie</span>$<span className="cursor">|</span>
      </h1>
      <p className="about-p">
        Siema, jestem <a href="https://github.com/Zielin0/">Zielino</a> i
        interesuje się programowaniem.
      </p>
      <p className="about-p">
        Języki programowania którymi się interesuje to: JavaScript, TypeScript,
        Python.
      </p>
      <p className="about-p">
        Do pisania kodu korzystam z
        <a href="https://code.visualstudio.com/"> Visual Studio Code</a>
      </p>
      <p className="about-p">
        Frameworki do JS z których korzystam to{' '}
        <a href="https://nodejs.org/">Node.js</a> i{' '}
        <a href="https://github.com/facebook/react/">React.js</a>
      </p>
      <p className="about-p">
        Jako menadżera bibliotek Node używam{' '}
        <a href="https://github.com/yarnpkg/yarn/">yarn</a>
      </p>

      <Link to="/" className="back">
        <span className="back-span">cd&nbsp;..</span>
      </Link>
    </div>
  )
}

export default About

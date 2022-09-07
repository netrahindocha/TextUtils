import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
          {/* <div className={`form-check form-switch text-${props.modeTxt}`}> */}

          {/* <button id="redBtn" className='mx-1 bg-danger' onClick={() => {props.toggleMode('danger')}} style={{height:'30px', width: '30px', borderRadius: '10px'}}></button> */}

          {/* <button id="greenBtn" className='mx-1 bg-success' onClick={() => {props.toggleMode('success')}} style={{height:'30px', width: '30px', borderRadius: '10px'}}></button> */}

          {/* <button id="blueBtn" className='mx-1 bg-primary' onClick={() => {props.toggleMode('primary')}} style={{height:'30px', width: '30px', borderRadius: '10px'}}></button> */}

          {/* <button id="orangeBtn" className='mx-1 bg-warning' onClick={() => {props.toggleMode('warning')}} style={{height:'30px', width: '30px', borderRadius: '10px'}}></button> */}

          {/* <button id="darkBtn" className='mx-1 bg-dark' onClick={() => {props.toggleMode('dark')}} style={{height:'30px', width: '30px', borderRadius: '10px'}}></button> */}


          <div className={`form-check mx-3 form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
            {/* <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={() => {props.toggleMode(null)}}/> */}
            <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

// Navbar.defaultProps = {title: 'Set title here',
//                       aboutText: 'About text here'}

import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className='flex z-200 bg-sky-900 text-white justify-around gap-8 py-3.5 text-2xl '>
            <h1 className=''><Link to="/landing-page">LearnX</Link></h1>
            <div className='flex gap-8'>
              <Link to="/landing-page">Home</Link>
              <Link to="/aboutv2">About</Link>
              <Link to="/services">Services</Link>
            </div>
            <Link to="/logout">Logout</Link>
        </nav>
        <marquee behavior="" direction="" className='bg-sky-700 text-white text-xl py-1.5'>We're excited to have you on board this collaborative project.
This initiative is brought to you by the Full Stack Team, and we hope you'll have a wonder user experience  </marquee>
    </div>
    
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav className='flex gap-5 font-bold bg-amber-200 text-amber-950 h-10 mb-2'> 
            <h1>LearnX</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
        <h1>Welcome to our site </h1>
      
    </div>
  )
}

export default Home


// const Home = () => <h1>Welcome to Home</h1>;
// export default Home;

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';

const LandingPage = () => {
  const navigate = useNavigate();

  //check if user is authenticated 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token){
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <NavBar/>
      <h1>Here is the landing page</h1>
      <p>You have successfully logged in!</p>
      
    </div>
  )
}

export default LandingPage

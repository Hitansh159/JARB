import React from 'react'
import HomePage from './Home'
import ResponsiveAppBar from '../Components/Navbar'
import ResumesGenerated from './ResumesGenerated'
import { Routes, Route } from 'react-router-dom';

function Profile() {
  return (
    <div>
        <ResponsiveAppBar />
        <HomePage/>
    </div>
  )
}

export default Profile
import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import ServiceCreatePage from '../views/serviceCreatePage/index'
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import UserProfile from '../views/userProfile/index'
import Security from '../views/security/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "../context/auth"
import React, { useState } from 'react'

function Directions() {

  // user != null
  // authenticated = true
  // o !!user vai fazer isso

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userRegistrationPage" element={<UserRegistrationPage />} />
          <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />
          <Route path="/serviceCreatePage" element={<ServiceCreatePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Directions
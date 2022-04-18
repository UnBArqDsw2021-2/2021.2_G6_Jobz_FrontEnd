import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import UserProfile from '../views/userProfile/index'
import Security from '../views/security/index'
import MyServicesPage from '../views/myServicesPage/index';
import EditContactPage from '../views//editContactPage/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "../context/auth"
import React from 'react'

function Directions() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/security" element={<Security />} />
          <Route path="/myServices" element={<MyServicesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/userRegistrationPage" element={<UserRegistrationPage />} />
          <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          //<Route path="/editContactPage" element={<EditContactPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Directions
import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import CollaboratorContactPage from '../views/contatoPrestador'
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "../context/auth"
import React from 'react'

function Directions() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userRegistrationPage" element={<UserRegistrationPage />} />
          <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />          
          <Route path="/collaboratorContactPage" element={<CollaboratorContactPage />} />
          <Route path="/login" element={<LoginPage />} />          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Directions
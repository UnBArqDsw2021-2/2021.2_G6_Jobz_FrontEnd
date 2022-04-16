import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import ExplorePage from '../views/explore/explorePage/index'
import ExplorePageTI from '../views/explore/explorePageTI/index'
import ExplorePageEncanador from '../views/explore/explorePageEncanador/index'
import ExplorePageJardineiro from '../views/explore/explorePageJardineiro/index'

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
          <Route path="/login" element={<LoginPage />} />   
          <Route path="/explore" element={<ExplorePage />} /> 
          <Route path="/exploreTI" element={<ExplorePageTI />} /> 
          <Route path="/explorePlumber" element={<ExplorePageEncanador />} /> 
          <Route path="/exploreGardener" element={<ExplorePageJardineiro />} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Directions
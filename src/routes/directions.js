import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import CollaboratorContactPage from '../views/contatoPrestador'
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import UserProfile from '../views/userProfile/index'
import Security from '../views/security/index'
import MyServicesPage from '../views/myServicesPage/index';
import ExplorePage from '../views/explore/explorePage/index'
import ExplorePageDiarista from '../views/explore/explorePageDiarista/index'
import ExplorePagePedreiro from '../views/explore/explorePagePedreiro/index'
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
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/security" element={<Security />} />
          <Route path="/myServices" element={<MyServicesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/userRegistrationPage" element={<UserRegistrationPage />} />
          <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />          
          <Route path="/login" element={<LoginPage />} />   
          <Route path="/explore" element={<ExplorePage />} /> 
          <Route path="/exploreTI" element={<ExplorePageTI />} /> 
          <Route path="/explorePlumber" element={<ExplorePageEncanador />} /> 
          <Route path="/exploreGardener" element={<ExplorePageJardineiro />} /> 
          <Route path="/exploreDayLabore" element={<ExplorePageDiarista />} />
          <Route path="/exploreBricklayer" element={<ExplorePagePedreiro />} />
          <Route path="/collaboratorContactPage" element={<CollaboratorContactPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Directions
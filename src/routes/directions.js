import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import ServiceCreatePage from '../views/serviceCreatePage/index'
import ServicePage from '../views/ServicesPage/index'
import LoginPage from '../views/loginPage/index'
import HomePage from '../views/HomePage/homePage'
import ProfilePage from '../views/ProfilePage/profile'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route
          path="/userRegistrationPage"
          element={<UserRegistrationPage />}
        />
        <Route
          path="/collaboratorRegistrationPage"
          element={<CollaboratorRegistrationPage />}
        />
        <Route path="/serviceCreatePage" element={<ServiceCreatePage />} />
        <Route path="/" element={<ServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

/* <Route path='/' element={<HomePage />} />*/

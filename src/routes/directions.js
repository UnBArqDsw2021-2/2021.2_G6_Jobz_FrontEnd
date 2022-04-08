import UserRegistrationPage from '../views/userRegistrationPage/index'
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import CollaboratorContactPage from '../views/contatoPrestador'
import HomePage from '../views/HomePage/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userRegistrationPage" element={<UserRegistrationPage />} />
        <Route path="/collaboratorRegistrationPage" element={<CollaboratorRegistrationPage />} />
        <Route path="/collaboratorContactPage" element={<CollaboratorContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

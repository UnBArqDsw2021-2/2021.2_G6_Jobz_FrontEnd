import UserRegistrationPage from '../views/userRegistrationPage/index';
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import ServiceCreatePage from '../views/serviceCreatePage/index';
import ServicePage from '../views/ServicesPage/index'
import LoginPage from '../views/loginPage/index'
import HomePage from '../views/HomePage/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/userRegistrationPage' element={<UserRegistrationPage />} />
        <Route path='/collaboratorRegistrationPage' element={<CollaboratorRegistrationPage />} />
        <Route path='/serviceCreatePage' element={<ServiceCreatePage />} />
        <Route path='/servicePage' element={<ServicePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

/* <Route path='/' element={<HomePage />} />*/

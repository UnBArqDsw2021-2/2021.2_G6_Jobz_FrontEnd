import UserRegistrationPage from '../views/userRegistrationPage/index';
import CollaboratorRegistrationPage from '../views/collaboratorRegistrationPage/index'
import ServiceCreatePage from '../views/serviceCreatePage/index';
import HomePage from '../views/HomePage/index'
import LoginPage from '../views/loginPage/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/userRegistrationPage' element={<UserRegistrationPage />} />
        <Route path='/collaboratorRegistrationPage' element={<CollaboratorRegistrationPage />} />
        <Route path='/serviceCreatePage' element={<ServiceCreatePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

/* <Route path='/' element={<HomePage />} />*/

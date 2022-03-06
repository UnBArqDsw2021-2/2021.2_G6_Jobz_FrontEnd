import RegistrationPage from '../views/userRegistrationPage/index';
import ServiceCreatePage from '../views/serviceCreatePage/index';
import ServicePage from '../views/ServicesPage/index'
import HomePage from '../views/HomePage/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/userRegistrationPage' element={<RegistrationPage />} />
        <Route path='/serviceCreatePage' element={<ServiceCreatePage />} />
        <Route path='/servicePage' element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

/* <Route path='/' element={<HomePage />} />*/

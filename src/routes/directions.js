import UserRegistrationPage from '../views/userRegistrationPage/index'
import HomePage from '../views/HomePage/homePage'
import ServicesPage from '../views/ServicesPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/userRegistrationPage"
          element={<UserRegistrationPage />}
        />
        <Route path="/ServicesPage" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default directions

/* <Route path='/' element={<HomePage />} />*/

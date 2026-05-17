import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import LoginForm from "./pages/LoginForm"
import RegisterForm from "./pages/RegisterForm"
import Cart from "./pages/Cart"
import Pizza from './pages/Pizza'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Navigation />
      <Header />
      <section className='App-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App

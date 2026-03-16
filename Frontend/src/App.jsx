import Home from "./pages/Home"
import { Routes, Route} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/api/user/login" element={<Login/>} />
      <Route path="/api/user/signup" element={<Signup/>} />
      <Route path="/api/captain/login" element={<CaptainLogin/>} />
      <Route path="/api/captain/signup" element={<CaptainSignup/>} />
    </Routes>
  )
}

export default App
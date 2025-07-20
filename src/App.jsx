import { Route, Routes } from "react-router"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import MainLayout from "./layout/Main"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<PrivateRoute children={<HomePage/>}/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </MainLayout>
  )
}

export default App

import { Navigate, Route, Routes } from "react-router-dom"
import LazySuspense from "./components/LazySuspence"
import './assets/css/App.css'
import { lazy } from "react"

const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazyRegister = lazy(()=> import("./pages/auth/Register.jsx"))
const LazyForgotPassword = lazy(()=> import("./pages/auth/ForgotPassword"))
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))
const LazyNavbar = lazy(() => import("./components/Navbar"))
const LazyBook = lazy(() => import("./pages/user/Book"))
const LazyCruizeBook = lazy(() => import("./pages/user/CruizeBook"))
const LazyUserProfile = lazy(() => import("./pages/admin/UserProfile"))
const LazyCruizePayment = lazy(() => import("./pages/user/CruizePayment"))
const LazyAdminLogin= lazy(() => import("./pages/admin/AdminLogin"))

const UserRoutes = () => {
  return (
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
      </Routes>
    </LazyUserMain>
  )
}

const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path ="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/register"/>}/>
      <Route path ="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      <Route path="/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/nav" element={<LazySuspense component={LazyNavbar}/>}/>
      <Route path="/book" element={<LazySuspense component={LazyBook}/>}/>
      <Route path="/cruizebook" element={<LazySuspense component={LazyCruizeBook}/>}/>
      <Route path="/userprofile" element={<LazySuspense component={LazyUserProfile}/>}/>
      <Route path="/cruizepayment" element={<LazySuspense component={LazyCruizePayment}/>}/>
      <Route path="/adminlogin" element={<LazySuspense component={LazyAdminLogin}/>}/>
      <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
    </Routes>
  )
}

export default App
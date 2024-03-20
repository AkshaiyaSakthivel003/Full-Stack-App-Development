import { Navigate, Route, Routes } from "react-router-dom"
import { lazy } from "react"
const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazyRegister = lazy(()=> import("./pages/auth/Register"))
const LazyForgotPassword = lazy(()=> import("./pages/auth/ForgotPassword"))
import { useState } from 'react'
import './assets/css/App.css';
import './pages/auth/Register'
import LazySuspense from "./components/LazySuspense"
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyHome = lazy(() => import("./pages/user/Main"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))
const LazyLanding = lazy(() => import("./pages/user/Landing"))
const LazyNavbar = lazy(() => import("./pages/user/Navbar"));
const LazyStay1 = lazy(() => import("./pages/user/Stay1"))
const LazyStay2 = lazy(() => import("./pages/user/Stay2"))
const LazyStay3 = lazy(() => import("./pages/user/Stay3"))
const LazyStay4 = lazy(() => import("./pages/user/Stay4"))
const LazyStay5 = lazy(() => import("./pages/user/Stay5"))
const LazyStay6 = lazy(() => import("./pages/user/Stay6"))
const LazyDine1 = lazy(() => import("./pages/user/Dine1"))
const LazyDine2 = lazy(() => import("./pages/user/Dine2"))
const LazyDine3 = lazy(() => import("./pages/user/Dine3"))
const LazyDine4 = lazy(() => import("./pages/user/Dine4"))
const LazySpa1 = lazy(() => import("./pages/user/Spa1"))
const LazySpa2 = lazy(() => import("./pages/user/Spa2"))
const LazySpa3 = lazy(() => import("./pages/user/Spa3"))
const LazySpa4 = lazy(() => import("./pages/user/Spa4"))
const LazyCruises = lazy(() => import("./pages/user/Cruises"))
const LazyMyprofile = lazy(() => import("./pages/user/Myprofile"))
const LazyAquaventuresPage = lazy(() => import("./pages/user/AquaventuresPage"))
const LazyCruiseDestinationsPage = lazy(() => import("./pages/user/CruiseDestinationsPage"))
const LazyCruiseEventPage = lazy(() => import("./pages/user/CruiseEventPage"))
const LazyTermsAndConditions = lazy(() => import("./pages/user/TermsAndConditions"))
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
     const[count, setCount] = useState(0)

  return (
    <div>
    <LazyNavbar />
    <Routes>
      <Route exact path="/" element={<Navigate to="/register"/>}/>
      <Route path="/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/landing" element={<LazySuspense component={LazyLanding}/>}/>
      <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
      <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      <Route path="/stay1" element={<LazySuspense component={LazyStay1}/>}/>
      <Route path="/stay2" element={<LazySuspense component={LazyStay2}/>}/>
      <Route path="/stay3" element={<LazySuspense component={LazyStay3}/>}/>
      <Route path="/stay4" element={<LazySuspense component={LazyStay4}/>}/>
      <Route path="/stay5" element={<LazySuspense component={LazyStay5}/>}/>
      <Route path="/stay6" element={<LazySuspense component={LazyStay6}/>}/>
      <Route path="/dine1" element={<LazySuspense component={LazyDine1}/>}/>
      <Route path="/dine2" element={<LazySuspense component={LazyDine2}/>}/>
      <Route path="/dine3" element={<LazySuspense component={LazyDine3}/>}/>
      <Route path="/dine4" element={<LazySuspense component={LazyDine4}/>}/>
      <Route path="/spa1" element={<LazySuspense component={LazySpa1}/>}/>
      <Route path="/spa2" element={<LazySuspense component={LazySpa2}/>}/>
      <Route path="/spa3" element={<LazySuspense component={LazySpa3}/>}/>
      <Route path="/spa4" element={<LazySuspense component={LazySpa4}/>}/>
      <Route path="/cruises" element={<LazySuspense component={LazyCruises}/>}/>
      <Route path="/myprofile" element={<LazySuspense component={LazyMyprofile}/>}/>
      <Route path="/aqua" element={<LazySuspense component={LazyAquaventuresPage}/>}/>
      <Route path="/destination" element={<LazySuspense component={LazyCruiseDestinationsPage}/>}/>
      <Route path="/events" element={<LazySuspense component={LazyCruiseEventPage}/>}/>
      <Route path="/terms" element={<LazySuspense component={LazyTermsAndConditions}/>}/>
      <Route path="/book" element={<LazySuspense component={LazyBook}/>}/>
      <Route path="/cruizebook" element={<LazySuspense component={LazyCruizeBook}/>}/>
      <Route path="/userprofile" element={<LazySuspense component={LazyUserProfile}/>}/>
      <Route path="/cruizepayment" element={<LazySuspense component={LazyCruizePayment}/>}/>
      <Route path="/adminlogin" element={<LazySuspense component={LazyAdminLogin}/>}/>
    </Routes>
    </div>
  )
}

export default App

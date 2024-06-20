import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import AdminDashboard from '../components/AdminDashboard'
import UserDashboard from '../components/UserDashboard'
import AdminProtectedRoutes from '../utils/AdminProtectedRoutes'
import UserProtectRoutes from '../utils/UserProtectedRoutes'
import { Navigate } from 'react-router-dom'


const AppRoutes =[
  {
    path:'/',
    element:<SignIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/admin',
    element:<AdminProtectedRoutes><AdminDashboard/></AdminProtectedRoutes>
  },
  {
    path:'/user',
    element:<UserProtectRoutes><UserDashboard/></UserProtectRoutes>
  },
  {
    path:'/*',
    element:<Navigate to='/'/>
  },
]



export default AppRoutes
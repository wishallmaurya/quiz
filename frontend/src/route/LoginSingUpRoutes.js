import { Navigate, Outlet } from 'react-router-dom'
const LoginSingUpRoutes = () => {
  let token = localStorage.getItem('token')

return (
  token ?<Navigate to='/'/> : <Outlet/>
  )
}

export default LoginSingUpRoutes
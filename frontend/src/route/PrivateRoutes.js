import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let token = localStorage.getItem('token')
return (
    token ? <Outlet/> : <Navigate to='/signin'/>
  )
}

export default PrivateRoutes
import { Navigate, Outlet } from 'react-router-dom'
const AdminRoutes = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let auth
   if(user?.username==='admin'){
    auth='admin'
  }
return (
  auth ? <Outlet/> : <Navigate to='/ForbiddenPage'/>
  )
}

export default AdminRoutes
import { Navigate, Outlet } from "umi";

export default (props) => {
  const isLogin: boolean = true
  if (isLogin) {
    return <Outlet/>
  } else {
    return <Navigate to="/login"/>
  }
}
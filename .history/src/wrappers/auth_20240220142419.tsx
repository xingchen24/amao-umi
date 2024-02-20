import { Navigate, Outlet } from "umi";

export default (props: any) => {
  console.log("###props", props)
  const isLogin: boolean = false
  if (isLogin) {
    return <Outlet/>
  } else {
    return <Navigate to="/test"/>
  }
}
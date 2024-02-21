import { useLocation, useNavigate, useParams } from "umi"
import { Button } from "antd"

export default function Test() {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  console.log("###location", location, params)
  return (
    <div>
      <Button onClick={() => navigate("../", { replace: true })}>跳转首页</Button>
    </div>
  )
}
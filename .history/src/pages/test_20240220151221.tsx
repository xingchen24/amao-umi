import { useLocation, useNavigate } from "umi"
import { Button } from "antd"

export default function Test() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log("###location", location)
  return (
    <div>
      <Button onClick={() => navigate("../success", { replace: true })}>点击</Button>
    </div>
  )
}
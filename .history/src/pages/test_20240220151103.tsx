import { useLocation, useNavigate } from "umi"
import { Button } from "antd"
import 'antd/dist/antd.css'

export default function Test() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log("###location", location)
  return (
    <div>
      <Button>点击</Button>
    </div>
  )
}
import { useLocation, useNavigate } from "umi"
import { Button } from "antd"

export default function Test() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log("###location", location)
  return (
    <div>
      <button>点击</button>
    </div>
  )
}
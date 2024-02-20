import { useLocation, useNavigate } from "umi"

export default function Test() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log("###location", location)
  return (
    <div>
      
    </div>
  )
}
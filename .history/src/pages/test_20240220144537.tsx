import { useLocation } from "umi"

export default function Test() {
  const location = useLocation()
  console.log("###location", location)
  return (
    <div>
      123
    </div>
  )
}
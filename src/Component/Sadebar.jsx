import { useContext } from "react"
import { ToggleContext } from "../Contexts/ToggleContest"


const Sadebar = () => {
   const profile= useContext(ToggleContext)
  return (
    <div>
      <h1>{profile.name}</h1>
    </div>
  )
}

export default Sadebar


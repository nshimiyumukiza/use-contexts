import { useContext } from "react"
import { ToggleContext } from "../Contexts/ToggleContest"


const Porfle = () => {
    const profile = useContext(ToggleContext)
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.age}</p>
      <p>{profile.sex}</p>
    </div>
  )
}

export default Porfle

  

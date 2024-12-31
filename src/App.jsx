import React, { useState } from 'react'
import DashBoard from './pages/DashBoard'
import { ToggleContext } from './Contexts/ToggleContest'

const App = () => {
 const[isLight,setIsLight] = useState("light")
  const [profile,setProfile]=useState({
    name:"ernest",
    age:"20",
    sex:"M"
  })


  return (
    <div>
     <ToggleContext.Provider value={{profile,isLight,setIsLight}}>
        <DashBoard/>
     </ToggleContext.Provider>
     
    </div>
  )
}

export default App



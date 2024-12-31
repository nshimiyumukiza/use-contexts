
import { useContext } from "react"
import { GoSun } from "react-icons/go"
import { IoMoonSharp } from "react-icons/io5"
import { ToggleContext } from "../Contexts/ToggleContest"


const Theme = () => {
   const { isLight , setIsLight } = useContext(ToggleContext)
  return (
    <div className={`${ isLight === 'dark' ? 'bg-black text-gray-500' : 'bg-gray-500 text-black'}`}>
        <button onClick={() => setIsLight( prevIsLight => prevIsLight === 'dark' ? 'light' : 'dark')}>  {  isLight === 'dark' ? <GoSun/> : <IoMoonSharp/>   }  </button>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Non, illum sed quibusdam, nam, repudiandae aliquid voluptatum et magnam itaque quasi adipisci officiis
         natus fugit molestiae ut modi ipsam harum doloremque a maxime ipsa enim earum rem ea! Officia, iure autem.
      </p>
    </div>
  )
}

export default Theme

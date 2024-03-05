import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";


export default function AddHobby() {
  const {AddHobby} = useContext(HobbyContext);
  
  return (
    <div>
      <button onClick={()=> AddHobby('football', 7)}>+</button>
    </div>
  )
}

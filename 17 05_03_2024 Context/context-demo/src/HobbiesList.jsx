import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";

export default function HobbiesList() {
  const { hobbies, RemoveHobby } = useContext(HobbyContext);

  const hobbiesListSTR = hobbies.map(
    hob => <div key={hob.id}>id={hob.id} name={hob.name} times={hob.times}
      <span style={{ color: 'red', marginLeft: 10 }}
        onClick={() => RemoveHobby(hob.id)}>X</span></div>
  );

  return (
    <div>HobbiesList <br />
      {hobbiesListSTR}
    </div>
  )
}


import React from 'react'

export default function FCInputs(props) {

  console.log('FCINPUTS');
  
  let id;
  let name;

  const chgId = (e) => {
    id = Number(e.target.value);
  }

  const btnSendPer2App = () => {
    let person = { id: id, name: name };
    props.sendPerson(person);
  }

  return (
    <div style={{ border: 'dashed 2px gray', margin: 20, padding: 15 }}>
      ID: <input type="text" style={{ width: 100 }} onChange={chgId} />  <br />
      NAME: <input type="text" style={{ width: 100 }} onChange={(e) => name = e.target.value} /> <br /> <br />
      <button onClick={btnSendPer2App}>Add Person</button>

    </div>
  )
}

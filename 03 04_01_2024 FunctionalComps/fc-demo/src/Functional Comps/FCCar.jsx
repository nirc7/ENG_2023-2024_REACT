import FCEngine from "./FCEngine";

export default function FCCar(props) {


  let size = 2000;
  if (props.size !== undefined) {
    size = props.size;
  }

  let myID = props.id;
  myID *= 2;
  if (myID <= 20) {
    return (
      <div style={{
        color: 'purple',
        fontSize: 20,
        border:'2px solid black',
        margin:20,
        padding:10,
        borderRadius:15
      }}>
        <p>Car</p>
        id = {myID} <br />
        color = {props.color} <br />
        <FCEngine  size={size}/>
      </div>
    );
  }
  else{
    return (
    <div style={{
      color: 'red',
      fontSize: 20,
      border:'2px solid orange',
      margin:20,
      padding:10,
      borderRadius:15
    }}>
      to much!!!
    </div>
  );
  }

  
}
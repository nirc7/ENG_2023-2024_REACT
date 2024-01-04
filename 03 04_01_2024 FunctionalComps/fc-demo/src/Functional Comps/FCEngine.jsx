
export default function FCEngine(props) {

  let isStarted = false;

  let counter = 1;
  console.log(isStarted, 'before func');
  function btnStart() {
    isStarted = true;
    console.log(isStarted, " in func");
    counter++;
    console.log(counter);
  }

  let name = 'no name';
  function chgName(e) {
    console.log(e.target.value);
  }

  return (
    <div style={{ border: 'solid blue 1px' }}>
      <h3>FCEngine</h3>
      size={props.size} <br />
      <button onClick={btnStart} >start</button> <br />
      isstarted = {isStarted ? "Yes" : "No"} <br />
      counter= {counter} <br />
      <input type="text" onChange={chgName} /> {name}
    </div>
  );
}  
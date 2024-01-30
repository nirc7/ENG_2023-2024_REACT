
export default function FCDemo() {

  let num1;

  const chgNum = (e) => {
    console.log(e.target.name);
    let obj = { [e.target.name]: e.target.value }
    console.log(obj);
    //[e.target.name]= e.target.value ;
  }

  const btnAdd = () => {
    console.log(num1);
  }

  return (
    <div>FCDemo
      num1: <input type="text" name="num1" onChange={chgNum} />
      <button onClick={btnAdd}>+</button>
    </div>
  )
}

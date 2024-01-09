
export default function FCStudent(props) {

  let num=5;

  function btnAdd() {
    console.log(num);
    num++;
    console.log(num);
  }

  function chgNum(e){
    num =   e.target.value;
  }

  console.log('before',  num);
  return (
    <div style={{
      borderRadius: 15,
      border: 'solid purple 2px', margin: 20,
      padding: 15
    }}>
      <h4>Student</h4>
      id={props.id} <br />
      name={props.name} <br />
      grade={props.grade} <br />
      <button onClick={btnAdd} className="btn btn-success">Add</button> <br /><br />
      <input className="form-control form-control-sm" type="text"
        placeholder="enter a num"
        aria-label=".form-control-sm example" 
        onChange={chgNum}/> <br />
      num={num}
      {/* <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..." ></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div> */}
    </div>
  );
}
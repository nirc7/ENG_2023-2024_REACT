
export default function FCStudent(props) {

  let grade= props.grade
  if ( 100 < grade) {
    grade += 5;
  }

  return (
    <div>
      student <br />
      name is {props.name} <br /> 
      grade = {grade}
    </div>
  );
}

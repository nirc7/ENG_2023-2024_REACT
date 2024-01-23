import React from 'react';

// export function Stam() {
//   return (
//     <div>stam</div>
//   );
// }

// export function Stam2() {
//   return (
//     <div>stam2</div>
//   );
// }

export default function FCPersonsList(props) {

  let personsStr = props.persons.map((per) =>
    <div key={per.id} >{per.id} -- {per.name} <br /></div>
  );

  return (
    <div>FCPersonsList
      {personsStr} <br />
      {/* <Stam /> */}
    </div>
  )
}

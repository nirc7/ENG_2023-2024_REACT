import React from 'react'

export default function FCResults(props) {
  
  let resultsSTR = props.values.map(
    (val, index) => {
      console.log(index);
      return <li key={index}>{val != NaN ? val : 0}</li>;
    }
  );

  return (
    <div>
      <h3>FCResults</h3>
      {resultsSTR}
    </div>
  )
}

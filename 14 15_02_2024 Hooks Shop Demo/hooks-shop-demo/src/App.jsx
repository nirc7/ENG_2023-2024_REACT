import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    console.log('effect');
  })

  useEffect(() => {
    console.log('count=', count);
    //go to DB insert Count...
  }, [count])


  console.log('return');
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => {
          console.log();
          return count + 1;
        })}>
          count is {count}
        </button> <br />
        count is {count} <br />

        <button onClick={() => setCount2((count2) => count2 + 2)}>
          count2 is {count2}
        </button> <br />
      </div>
    </>
  )
}

export default App

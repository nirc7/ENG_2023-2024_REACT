import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //const [count, setCount] = useState((Math.floor(Math.random() * 10) + 1) % 2 == 0 ? 0 : 1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect', count);
  }, [count])

  useEffect(() => {
    console.log('did mount');
    
    return () => {
      console.log('unmount');
    }
  }, [])



  console.log('count', count);

  return (
    <>
      <div className="card">
        avi <br />
        <button onClick={() => {
          let newC = count + 1;
          setCount(newC);
        }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

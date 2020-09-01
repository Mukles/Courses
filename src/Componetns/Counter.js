import React, {useEffect, useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    window.addEventListener('resize', ()=>{
      setCount('23');
      console.log('useEffect');
    })
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount('23')}>
        Click me
      </button>
    </div>
  );
}
export default Counter

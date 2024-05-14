import React,{useState} from 'react'

export default function Pqn_useState() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  const [list, setlist]=useState([1,5]);
  const pqnHandleList =()=>{
        let num = parseInt(Math.random()*100);
        setlist([
          ...list,
          num
        ])
  }
  return (
    
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>lise: {list.toString()}</h3>
      <button onClick={pqnHandleList}>Thêm ngẫu nhiên</button>
    </div>
  );
}

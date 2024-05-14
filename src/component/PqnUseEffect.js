import React, { useEffect, useState } from 'react'

export default function PqnUseEffect() {
    const [count,setCount] = useState(0);
    const pqnHandleClick = ()=>{
        setCount(prev => prev + 1);
    }
    useEffect(()=>{
        document.title=`Phạm Quang Nhất clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    useEffect(()=>{
        document.title=("chạy lần đầu tiên - một lần");
    },[])
    useEffect(()=>{
        document.title=(`useEffect count click: `,count)
    },[count])
  return (
    <div>
      <h2>Demo - useEffect: You clicked {count} times </h2>
      <button onClick={pqnHandleClick}> Click me</button>
    </div>
  )
}

import React,{useState} from 'react'
import Pqn_useState from './component/Pqn_usestate'
import PqnUseEffect from './component/PqnUseEffect'




export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Phạm Quang Nhất - hook</h1>
      <hr/>
      <Pqn_useState />
      <hr />
      <PqnUseEffect />
      <hr/>


    </div>

  )
}

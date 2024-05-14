import React, { createContext ,useContext, useState } from 'react'
import PqnUseContext1 from './PqnUseContext1';
export const themeContext =createContext();

export default function PqnUseContext() {
    const [theme,setTheme] = useState('red');
    const pqnHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red')
    }
  return (
    <themeContext.provider values={theme}>
    <div className='alerd'>
      <h2>Demo useContext</h2>
      <PqnUseContext1 />
      <button onClick={pqnHandleChange}>Change bgcolor</button>
    </div>
    </themeContext.provider>
  )
}

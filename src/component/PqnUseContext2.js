import React, { useContext } from 'react'
import { themeContext } from './PqnUseContext'

export default function PqnUseContext2() {
    const theme = useContext(themeContext);
  return (
    <div className={theme + 'm-3'}>
      <h2>PqnUseContext2</h2>
      <p>
        <b>2210900115</b>
        <b>Phạm Quang Nhất</b>
        <i>K22Cntt1/</i>
      </p>
    </div>
  )
}

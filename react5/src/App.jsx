import React, { useState } from 'react'
import DataFetcher from './DataFetcher'

const App = () => {
  const [show , setShow] = useState(true) 
  
  
  return (
    <>
    <div>App</div>
     
     <button onClick={()=>setShow(!show)} >Toogle</button> 
     <DataFetcher/>
    </>
  )
}

export default App
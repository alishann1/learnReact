import React, { use } from 'react'

function DataFetch() {
    useEffect((function(){
        fetch('https://jsonplaceholder.typicode.com/todos/1',{signal})
        .then 
    }) => {
        
    })
  return (
    <div>DataFetch</div>
  )
}

export default DataFetch
import React, { useState, useEffect } from 'react'

function Main() {

  const[query, setQuery] = useState('')
  const[wordid, setWordId] = useState(0)

  const handleSearch = (e) => {

    setQuery(e.target.value)
    setWordId(0);

  }

  return (

    <>
    <input type="text" onChange={handleSearch}></input>
    </>
    // <div className='main'>
    //     <h1>Main</h1>
    //   lkajsdflkasldkfals

    // </div>
  )
}

export default Main

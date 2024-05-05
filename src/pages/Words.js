import React, { useState, useEffect } from 'react'

function Words() {

  const[query, setQuery] = useState('')
  const[wordid, setWordId] = useState(0)

  const handleSearch = (e) => {

    setQuery(e.target.value)
    setWordId(0);
    console.log("query", query);

  }

  return (
    // <div>
      
    // </div>
    <>
    <input type="text" onChange={handleSearch}></input>
    </>
  )
}

export default Words

import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'




function Form({allNotes, setAllNotes}) {
  const [note, setNote] = useState()
const inputRef = useRef(null)

const handleChange = () => {
  let value = inputRef.current.value
  
  setNote(() => value)
  
}

const handleSubmit = (e) => {
  setAllNotes(() => [{
    text: note,
    id: uuidv4()
  }, ...allNotes])
  inputRef.current.value = ''
  e.preventDefault()
}

  return (
    <form onSubmit={handleSubmit}>
       <input ref={inputRef} onChange={handleChange} placeholder='Enter a task...'/> 
       <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
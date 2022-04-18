import React, { useEffect } from 'react'
import Form from '../components/Form'



function AllNotes({allNotes, setAllNotes, isAuth}) {


// load notes from local storage
useEffect(() => {
  let loadData = localStorage.getItem('data')
  const data = JSON.parse(loadData)
  setAllNotes(data)
}, [setAllNotes])


// save allNotes to local storage
useEffect(() => {
let json = JSON.stringify(allNotes)
localStorage.setItem('data', json)
}, [allNotes])


// delete item 
const deleteItem = (id) => {
  const removeItem = allNotes.filter((item) => {
  return item.id !== id
  })
  setAllNotes(removeItem)
}




  return (
  
<div className='notes-page'> 
  <Form allNotes={allNotes} setAllNotes={setAllNotes} />
  <div className='lists'>
  <ul>
  <h3>TODO</h3>
  <div className='list-container'>
{allNotes.map(({text, id}, index) => (
  <li key={id}>
  <span>{text} </span>
  <button id='delete-btn' onClick={() =>deleteItem(id)}>x</button> 
  </li>
))}
</div>
<button id='deleteAll-btn' onClick={() => setAllNotes([])}>Delete All</button>
</ul>
</div>
</div>
)
}

export default AllNotes
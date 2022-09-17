import React, { useContext } from 'react'
import NoteContext from '../context/note/noteContext'
function UserInfo() {
  const context = useContext(NoteContext);
  let { notes } = context;

  return (
    // <div>Name :{localStorage.getItem('name')}</div>
    <div className="container card border-success mb-3" style={{maxWidth: '18rem'}}>
      <h2 className="card-header bg-transparent border-success">UserInfo</h2>
      <div className="card-body text-success">
        <h5 className="card-title">Name : {localStorage.getItem('name')}</h5>
        <h5 className="card-title">Email : {localStorage.getItem('email')}</h5>
        <h5 className="card-title">Total Notes : {notes.length}</h5>
        <p className="card-text">I've Uploaded my notes on the cloud</p>
      </div>
      <div className="card-footer bg-transparent border-success">IsmartNote</div>
    </div>
  )
}

export default UserInfo
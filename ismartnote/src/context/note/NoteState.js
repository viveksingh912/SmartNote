import NoteContext from "./noteContext";
import { useState } from "react";
import React from "react";

function NoteState(props) {
  const url = 'http://localhost:5000';
  let notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const getNotes = async () => {
    const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    let data = await response.json();
    // console.log(data);
    setNotes(data);

  }

  const addNote = async (title, description, tag) => {
    //Making API call to add notes in database
    const response = await fetch(`${url}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const note =await response.json();
    //adding the note
    console.log('Adding a new note');
    setNotes(notes.concat(note));
  }
  const deleteNote =async (id) => {
    //Making API call to add notes in database
    const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const data=await response.json();
    console.log(data);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const data=response.json();
    console.log(data);
    // let json = response.json();
    // editing the note 
    let newData=JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        newData[i].title = title;
        newData[i].description = description
        newData[i].tag = tag;
        break;
      }
    }
    setNotes(newData);

  }

  return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>{props.children}</NoteContext.Provider>;
}

export default NoteState;

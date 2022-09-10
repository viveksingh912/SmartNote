import NoteContext from "./noteContext";
import { useState } from "react";
import React from "react";

function NoteState(props) {
   
   const  notesInitial=[
      {
        "_id": "631a49ef340649e1d6261ef8",
        "user": "6319d300670e2af4f0766ca9",
        "title": "new titlt",
        "description": "this is my fitrt pusthed  note",
        "tag": "socia lt",
        "__v": 0
      },
      {
        "_id": "631a49f4340649e1d6261efa",
        "user": "6319d300670e2af4f0766ca9",
        "title": "new titlt",
        "description": "this is my fitrt pusthefd  note",
        "tag": "socia lt",
        "__v": 0
      },
      {
        "_id": "631a4a526c3b273b697657e4",
        "user": "6319d300670e2af4f0766ca9",
        "title": "new titlt",
        "description": "this is my second  note",
        "tag": "socia lt",
        "__v": 0
      },
      {
        "_id": "631a4a5d6c3b273b697657e6",
        "user": "6319d300670e2af4f0766ca9",
        "title": "new titlt",
        "description": "this is my secondf  note",
        "tag": "socia lt",
        "__v": 0
      }
    ]
    const [notes, setNotes] = useState(notesInitial);
    const addNote=(title,description,tag )=>{
      console.log('Adding a new note');
      const note={
         "_id": "631a4a5d36c3b273b697657e6",
         "user": "6319d300670e2af4f0766ca9",
         "title": title,
         "description": description,
         "tag": tag,
         "__v": 0
       }
      notes.concat(note);
      setNotes(notes.concat(note));
    }
    const deleteNote=(id)=>{
      const newNotes=notes.filter((note)=>{return note._id!==id});
      setNotes(newNotes);
    }
    const editNote=(id,title,description,tag)=>{
      for(let i=0;i<notes.length;i++){
         const element=notes[i];
         if(element._id===id){
           element.title=title;
           element.description=description
           element.tag=tag;
         }
      }

    }
   
   return <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>{props.children}</NoteContext.Provider>;
}

export default NoteState;

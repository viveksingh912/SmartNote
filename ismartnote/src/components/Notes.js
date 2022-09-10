import React,{useContext} from 'react'
import NoteContext from "../context/note/noteContext";
import Noteitem from './Noteitem';
const Notes = () => {
    const context = useContext(NoteContext);
  let { notes, setNotes } = context;
    return (
        <div className="  row text-start my-3">
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}/>
            })}
        </div>
    )
}

export default Notes
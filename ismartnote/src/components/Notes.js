import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/note/noteContext";
import Noteitem from './Noteitem';
import AddNote from "./AddNote";
import { useNavigate } from 'react-router';
const Notes = () => {
    const context = useContext(NoteContext);
    let { notes, getNotes,editNote } = context;
    const history=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
        getNotes();
        }
        else{
           history('/login');
        }
        // eslint-disable-next-line
    }, [])
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
    const handleClick = (e) => {
        e.preventDefault();// to avoid the reload of  the page
        refClose.current.click();
       editNote(note.id,note.etitle,note.edescription,note.etag);
      };
      const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
    const ref = useRef(null);
    const refClose=useRef(null);
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    }
    return (
        <>
            <AddNote />


            <button ref={ref} type="button" className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="etitle"
                                        name="etitle"
                                        value={note.etitle}
                                        onChange={onChange}
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edescription"
                                        value={note.edescription}
                                        name="edescription"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">
                                        Tag
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etag"
                                        name="etag"
                                        value={note.etag}
                                        onChange={onChange}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="  row text-start my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
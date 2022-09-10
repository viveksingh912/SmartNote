import React from "react";
import { useContext } from "react";
import NoteContext from "../context/note/noteContext";
function Noteitem(props) {
    let { note } = props;
    const context = useContext(NoteContext);
    let { deleteNote } = context;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between"><h5 className="card-title">{note.title}</h5>
                        <div><i className="fa-solid fa-trash mx-3" onClick={() => { deleteNote(note._id) }}></i>
                            <i className="fa-solid fa-edit mx-3"></i></div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Noteitem;

import React from "react";
import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import { useState } from "react";
import NoteState from "../context/Notes/NoteState"

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title:"", description:"", tag:""})
  
  
  const handleClick = (event) => 
  {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title:"", description:"", tag:""});
  }

  const onChange = (event) => {
    setNote({...note, [event.target.name]:event.target.value})
  }

  return (
    <div>
      <div className="container">
        <h1>Add Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name = "title"
              onChange={onChange}
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name = "description"
              onChange={onChange}
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name = "tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

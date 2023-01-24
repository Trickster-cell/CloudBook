import React from "react";
import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const myStyle = {
    backgroundImage:
      "url('https://images.pond5.com/white-cubes-background-abstract-minimalistic-footage-084414303_prevstill.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="col-md-3">
      <div style={myStyle} className="card my-3">
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {note.tag}
          </span>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => updateNote(note)}
          ></i>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Note Successfully", "success");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

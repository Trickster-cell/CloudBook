import React from "react";
import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h1>Your Notes</h1>
      {notes.map((note) => {
        return <NoteItem  note = {note}/>;
      })}
    </div>
  );
};

export default Notes;
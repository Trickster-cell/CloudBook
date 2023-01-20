import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63ca7bc4088c8b5f3101e567",
      user: "63c478a42ebd0b798e401aa8",
      title: "Kuch bhi",
      description: "Huehuehue",
      tag: "personal",
      date: "2023-01-20T11:32:20.919Z",
      __v: 0,
    },
    {
      _id: "63ca7bdc088c8b5f3101e569",
      user: "63c478a42ebd0b798e401aa8",
      title: "Kuch bhi",
      description: "I am Yash Raj, from EEE",
      tag: "personal",
      date: "2023-01-20T11:32:44.188Z",
      __v: 0,
    },
  ]

  const [notes, setNotes] = useState(notesInitial)


  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;

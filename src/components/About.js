import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
const About = () => {
  return (
    <div
      style={{
        WebkitTextStrokeWidth: "0.7px",
        WebkitTextStrokeColor: "white",
        paddingBottom:"500px",
        fontSize:"23px",
        fontWeight:"bolder"
      }}
    >
      This is About iNoteBook
    </div>
  );
};

export default About;

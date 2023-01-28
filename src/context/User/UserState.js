import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const host = "http://localhost:5000";
  const state = {
    email: localStorage.getItem("username"),
  };
  const [state2, setState2] = useState(state);

  const update = (email) => {
    setState2({ email: email });
  };
  const getUserDetails = async () => {
    // console.log("Adding a new note");
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    update(json.first_name);
    localStorage.setItem("username", json.first_name);
  };

  return (
    <UserContext.Provider value={{ state2, update, getUserDetails }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

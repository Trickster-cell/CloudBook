import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/Notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1586191582151-f73872dfd183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
    // backgroundColor: "red",
    height: "100%",
    margin: "0",
    paddingBottom: "50px",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  };
  return (
    <>
      <div style={myStyle}>
        <NoteState>
          <BrowserRouter>
            <NavBar />
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/login"
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </NoteState>
      </div>
    </>
  );
}

export default App;

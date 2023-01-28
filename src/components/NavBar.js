import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import noteContext from "../context/Notes/noteContext";
import { useContext } from "react";
import userContext from "../context/User/userContext";


const NavBar = (props) => {
  let Navigate = useNavigate();
  const userdetails = useContext(userContext);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    Navigate("/login");
  };


  // const state = {context};

  // console.log(userdetails.email);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={'nav-link ${location.pathname==="/" ? "active":""}'}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  'nav-link ${location.pathname==="/about" ? "active":""}'
                }
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">
                SignUp
              </Link>
            </form>
          ) : (
            <div>
              <i className="fa-solid fa-user mx-2" style={{ color: "white" }}></i>
              <b className="mx-2" style={{ color: "white", fontSize:"20px" }}>Hello, {userdetails.state2.email}!</b>
              <button className="btn btn-primary mx-2" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

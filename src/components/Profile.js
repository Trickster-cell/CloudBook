import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../context/User/userContext";
import { useState } from "react";
import imgContext from "../context/ImageHandles/imgContext";
import { useEffect } from "react";

const Profile = () => {
  //   let Navigate = useNavigate();

  const userdetails = useContext(userContext);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  function timeSince(date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find((i) => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  }
  const timeDiff = (text) => {
    // const d1 = Date.now;
    const d2 = new Date(text);
    return timeSince(d2);
  };
  const imagedetails = useContext(imgContext);
  const { origImage, getImage, setOrigImage, uploadImage } = imagedetails;
  console.log("origImage in Profile ", origImage.data);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // console.log(origImage);
      getImage();
    }
  }, []);
  const [postImage, setPostImage] = useState([]);

  const handleEditImage = async (event) => {
    event.preventDefault();
    uploadImage(postImage);
    console.log(postImage);
    // console.log(origImage);
  };

  const EditImage = async (event) => {
    event.preventDefault();
  };

  const handleFile = async (event) => {
    event.preventDefault();
    // console.log(event.target.files[0]);
    // console.log("Edit Image");
    const file = event.target.files[0];
    // const base64 = await convertToBase64(file);
    // console.log(base64);
    console.log("ok");
    // setPostImage({ ...postImage, myFile: base64 });
    console.log(postImage);
  };

  const handleEditName = () => {};

  const [hovered, setHovered] = useState(false);
  const [opacity, setOpacity] = useState(1);

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <>
      <div
        className="container"
        style={{ color: "white", justifyContent: "center", display: "flex" }}
      >
        <h1> Profile Page</h1>
      </div>
      <div
        className="container my-3"
        style={{
          color: "white",
          justifyContent: "center",
          display: "flex",
          height: "200px",
        }}
      >
        {!localStorage.getItem("dp") ? (
          <div>
            <img
              style={{
                borderRadius: "50%",
                opacity: opacity,
                cursor: "pointer",
                width: "200px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              src="https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
              // onClick={handleEditImage}
              onMouseEnter={() => {
                setHovered(true);
                setOpacity(0.7);
              }}
              onMouseLeave={() => {
                setHovered(false);
                setOpacity(1);
              }}
              title="Change Profile Image"
            />
            {hovered && (
              <i
                style={{
                  fontSize: "20px",
                  color: "gray",
                  position: "absolute",
                  top: "35%",
                  left: "49.40%",
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="fa-solid fa-square-pen"
                // onClick={handleEditImage}
                title="Change Profile Image"
                onMouseEnter={() => {
                  setHovered(true);
                  setOpacity(0.7);
                }}
                onMouseLeave={() => {
                  setHovered(false);
                  setOpacity(1);
                }}
              />
            )}
          </div>
        ) : (
          <div>
            {/* {async () => {
              setPostImage(
                btoa(String.fromCharCode(...new Uint8Array(origImage)))
              );
            }} */}
            <img
              style={{ height: "210px", width: "210px", borderRadius: "50%" }}
              src={`data:image/png; base64, ${_arrayBufferToBase64(
                origImage.data
              )}`}
            />
          </div>
        )}
      </div>

      <div
        className="container"
        style={{ color: "white", justifyContent: "center", display: "flex" }}
      >
        <h2 style={{ display: "inline" }} className="mx-2">
          {userdetails.state2.first_name} {userdetails.state2.last_name}
          <i
            style={{ fontSize: "20px", color: "gray" }}
            className="fa-solid fa-square-pen"
            onClick={handleEditName}
            title="Edit Name"
          />
        </h2>
      </div>
      <div
        className="container"
        style={{ color: "white", justifyContent: "center", display: "flex" }}
      >
        <h3 style={{ display: "inline" }}>
          Email Address: {userdetails.state2.email}
        </h3>
      </div>
      <div
        className="container"
        style={{ color: "white", justifyContent: "center", display: "flex" }}
      >
        <h5 style={{ display: "inline" }}>
          Registered: {timeDiff(userdetails.state2.date)}
        </h5>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form className="mx-1" onSubmit={handleEditImage}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change Profile Photo
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label mx-2">
                  Image must be less than 16MB
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="file"
                  required
                  onChange={handleFile}
                  accept=".jpeg, .jpg, .png"
                />
              </div>
              <div className="modal-footer mx-1">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Change Profile Picture
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

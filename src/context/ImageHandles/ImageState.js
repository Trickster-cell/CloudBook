import imgContext from "./imgContext";
import { useState } from "react";

const ImageState = (props) => {
  const host = "http://localhost:5000";
  const [origImage, setOrigImage] = useState([]);

  const getImage = async () => {
    const response = await fetch(`${host}/api/image/getimg`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const res = await response.json();
    // console.log("print for res on line 16",res[0].img.data);
    if (res[0].img.data) {
      setOrigImage(res[0].img.data);
      localStorage.setItem("dp", res[0].img.data);
    }
  };

  const uploadImage = async (file) => {
    const response = await fetch(`${host}/api/image/upload`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
      body: { testImage: file },
    });
    const imgfin = await response.json();
    setOrigImage({ testImage: file });
    console.log(imgfin);
  };

  return (
    <imgContext.Provider
      value={{ origImage, getImage, setOrigImage, uploadImage }}
    >
      {props.children}
    </imgContext.Provider>
  );
};

export default ImageState;

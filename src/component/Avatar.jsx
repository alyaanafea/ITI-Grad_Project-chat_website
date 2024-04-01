/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import avatar from "../assets/images/avatar_Blank.jpg";
export default function Avatar(props) {
  const { mode = "", initImage = avatar, onFileUpload, isMessage } = props;

  const [image, setImage] = useState(initImage ? initImage : avatar);
  const imagehandler = (e) => {
    const imageUploaded = e.target.files[0];
    if (imageUploaded.type.split("/")[0] === "image") {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        setImage(result);
      };
      fileReader.readAsDataURL(imageUploaded);
      onFileUpload(imageUploaded);
    } else {
      console.log("Please Upload image");
    }
  };

  const removeImageHnadler = () => {
    setImage(initImage);
    onFileUpload("");
  };

  if (mode || isMessage) {
    return (
      <div
        className={isMessage ? `chat-image avatar ${mode} ` : `avatar ${mode}`}
      >
        <div className={isMessage ? "w-10 rounded-full" : "w-24 rounded-full"}>
          {/* {console.log("image", image)} */}
          <img src={image} />
        </div>
      </div>
    );
  }

  return (
    <label
      htmlFor="dropzone-file"
      className=" flex flex-col items-center hover:cursor-pointer"
    >
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
      <div className="flex ">
        <div>
          <span className="block underline">choose image</span>
          <input
            type="file"
            name="avatar"
            className="hidden"
            id="dropzone-file"
            onChange={imagehandler}
          />
        </div>
        <div className=" ms-5 text-red-700">
          <button
            type="button"
            // className="btn btn-error mt-2"
            onClick={removeImageHnadler}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </label>
  );
}

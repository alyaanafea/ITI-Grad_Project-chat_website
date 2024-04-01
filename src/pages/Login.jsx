
//import { useState } from "react";
//import { UplaodFile } from "../utils/uploadimage";

//function Login() {

// const [file,setFile] = useState();

// const uploadAvatarHandler=async()=>{
//   try {
//     if(file){
//       const urlFile = await UplaodFile("avatar",file);
//       console.log(urlFile);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// return(
//   <>
//   <div className=" flex flex-col gap-1 items-center">
//   <label htmlFor="avatar">Upload File</label>
//   <input onChange={(e)=> setFile(e.target.files[0])} type="file" name="avatar"  id="" />
//   <button onClick={uploadAvatarHandler} className="btn btn-outline">Upload</button>
//   </div>

//   </>
// )
// return <div>Login</div>;


import "./loginStyle.css";

import LoginComponent from "../component/login/loginComponent";
import LoginForm from "../component/login/LoginForm";



function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-black">
        <LoginComponent className="hidden md:block" />
        <LoginForm className="col-span-2 md:col-span-1" />
      </div>
    </div>
  );
}

export default Login;


import WhiteLogo from "../logo/WhiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEllipsisV,
  faSignOutAlt,
  faTrash,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/useLogout";
import Avatar from "../Avatar";
import useAuth from "../../hooks/useAuth";
import NewGroup from "../modal/NewGroup";
import { useState } from "react";
import GenericModal from "../GenericModal";
const SidBarHeader = (props) => {
  const {openModal,openProfileModal}=props

  const [dialog, setDialog] = useState(false);
  const { loading, logout } = useLogout();
  const { getAuthUser } = useAuth();
  const { image } = JSON.parse(getAuthUser("user"));

  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const confirmAction = () => {
  //   console.log("Confirmed");
  //   closeModal();
  // };

  // const cancelAction = () => {
  //   console.log("Cancelled");
  //   closeModal();
  // };

  // console.log(image);

  return (
    <>
    <div className="flex justify-between bgnav py-3 px-6 items-center ">
      <div className="flex justify-center items-center gap-5">
        <WhiteLogo w="50" h="50" />

        <p>TYPING....</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Avatar isMessage={true} initImage={image} />
        <div>
          <div className="dropdown dropdown-bottom dropdown-end ">

            <div tabIndex={0} role="button" >

              <FontAwesomeIcon icon={faEllipsisV} className="text-2xl " />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2   shadow bg-base-100 rounded-box sm:w-24 md:w-40 md:text-lg text-base lg:w-52 flex justify-center "
            >

              <li>
                <button
                  onClick={openModal}
                  className="text-black flex justify-between "
                >
                  <p className=" font-medium">New Group</p>
                  <FontAwesomeIcon icon={faUserGroup} className=" " />
                </button>
              </li>
              

              <li>
                <button
                  onClick={openProfileModal}
                  className="text-black flex justify-between "
                >
                  <p className=" font-medium">Profile</p>
                  <FontAwesomeIcon icon={faUser} className=" " />
                </button>
              </li>  
              <li onClick={()=>setDialog(!dialog)} className=" flex justify-between text-red-500 ">
                  <p className=" font-medium">Delete Account <FontAwesomeIcon icon={faTrash} /></p>{" "}
                  
              </li>
              <li >
                <a onClick={logout} className="text-black flex justify-between ">
                  <p className=" font-medium">Logout</p>{" "}
                  <FontAwesomeIcon icon={faSignOutAlt} className=" " />
                </a>
              </li>
 

            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
    <GenericModal setDialog={setDialog} dialog={dialog} header={"Delete Account"} content={"Are You Should of Deleting Your Account?"} url={"auth/delete"} />
    </>
  );
};

export default SidBarHeader;

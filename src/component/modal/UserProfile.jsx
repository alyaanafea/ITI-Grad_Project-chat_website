// UserProfileModal.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../Avatar";

const UserProfileModal = ({ show, onClose, user }) => {
  return (
    <div
      className={`fixed z-[1000] inset-0 overflow-y-auto ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto text-2xl ">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button onClick={onClose}>
              <FontAwesomeIcon
                icon={faTimes}
                className="h-6 w-6 text-gray-600"
              />
            </button>
          </div>
          <h2 className="font-bold">User Profile</h2>
          <div className="mt-4  flex items-center">
            {/* <Avatar  isMessage={true} initImage={user.image} /> */}
            <img src={user.image} className="w-28 rounded-full" alt="user image" />
            <div className="ml-4">
              <p className="font-semibold text-xl ">{`${user.firstname} ${user.lastname}`}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;

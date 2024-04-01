import React, { useEffect, useState } from "react";
import { faComment, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllUsers from "../sidbar/AllUsers";
import SearchBar from "../sidbar/SearchBar";
import { useAllUsers, useChats } from "../../zustand/zustand";

// import UsersComponent from "./UsersComponent";
// import ChatsComponent from "./ChatsComponent";

const Toggle_User_Group = ({ users }) => {
  const [searchChat, setSearchChat] = useState([]);
  const { allUsers } = useAllUsers();
  const { allChats } = useChats();
  const [selectedTab, setSelectedTab] = useState("users");


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const searchInputHandler = (e) => {
    // console.log(allUsers);
    if (selectedTab === "chats") {
      setSearchChat(
        allChats.filter((chat) =>
          chat.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setSearchChat(
        allUsers.filter((user) =>{
          const combinedNames = `${user.firstname} ${user.lastname ? user.lastname : ""}`.toLowerCase();
         return combinedNames.includes(e.target.value.toLowerCase())
        })
      );
    }
  }

  useEffect(() => {
    if(selectedTab === "chats" && allChats) setSearchChat([...allChats]);
    else setSearchChat([...allUsers]);
  }, [selectedTab , allUsers , allChats]);

  return (
    <>
    <SearchBar  searchInputHandler={searchInputHandler}  />

    <div className="grid grid-cols-2 w-full items-center ">
      <div
        className={`flex gap-3 col-span-1 line justify-center items-center py-3 cursor-pointer ${
          selectedTab === "users" ? "text-white-500" : "text-white-100"
        }`}
        onClick={() => handleTabClick("users")}
        style={{
          borderBottom: selectedTab === "users" ? "2px solid white" : "none",
          fontWeight: selectedTab === "users" ? "600" : "100",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
        </span>
        <p className="">Users</p>
      </div>
      <div
        className={`flex gap-3 col-span-1 justify-center items-center py-3 cursor-pointer ${
          selectedTab === "chats" ? "text-white-500" : ""
        }`}
        onClick={() => handleTabClick("chats")}
        style={{
          borderBottom: selectedTab === "chats" ? "2px solid white" : "none",
          fontWeight: selectedTab === "chats" ? "600" : "100",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </span>
        <p>Chats</p>
      </div>
      {/* {selectedTab === "users" ? (
        <AllUsers isChat={false} allUsers={searchChat}  users = {users}/>
      ) : (
        <AllUsers isChat={true} allChats={searchChat} />
      )} */}
      <AllUsers isChat={selectedTab === "users"? false:true} searchChat={searchChat} />
    </div>
    </>
  );
};

export default Toggle_User_Group;

/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import {
  faEllipsisV,
  faPhone,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "../home/Drawer";
import "./message.css";
import Avatar from "../Avatar";
import { useChats, useConversation } from "../../zustand/zustand";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DropMenu from "../DropMenu";

const ChatNavBar = ({ openModal, openProfileModal }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 1100);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedChat, setselectedChat] = useState();
  const { selectedConversation } = useConversation();
  const { setAllChats, allChats } = useChats();
  // const [selectedChat, setselectedChat] = useState();
  const { getAuthUser } = useAuth();
  const userId = JSON.parse(getAuthUser("user"))._id;
  const id = searchParams.get("id");

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const selectedChat = allChats[
  //   allChats.findIndex((chat) => chat._id ===id )
  // ];
  const index =  allChats?.findIndex((chat) => chat?._id === id);
  useEffect(() => {
    // console.log("index", index);
    if (index > -1) {
      setselectedChat(allChats[index]);
      // console.log("index", index);
    }
  }, [id , allChats]);

  // console.log(selectedChat , id);

  return (
    <>
      {/* {selectedConversation[
        selectedConversation.findIndex((chat) => chat.chat_ === id)
      ]?.messages[0].map((message) => (
        "dsa"
      ))} */}
      <div
        // key={message.id}
        className="flex justify-between bgnav py-3 px-6 items-center nav"
      >
        <div className="flex justify-center items-center gap-5 py-1">
          {/* <Avatar isMessage={true} initImage={""} /> */}
          {selectedChat?.members.map((member) =>
            // member == userId ? null : (
            //   <Avatar isMessage={true} initImage={member.image} />
            // )

            member._id ? (
              member._id == userId ? null : (
                <Avatar key={member._id}  isMessage={true} initImage={member.image} />
              )
            ) : member == userId ? null : (
              <Avatar key={member._id} isMessage={true} initImage={member.image} />
            )

          )}
          <div>{selectedChat?.name}</div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-xl " />
          </div>
          <p>
            <FontAwesomeIcon icon={faUserPlus} className="text-xl " />
          </p>
          {isScreenSmall ? (
            <p>
              <Drawer
                openModal={openModal}
                openProfileModal={openProfileModal}
                className="z-3"
              />
            </p>
          ) : (
            <p>
              <DropMenu headOfMenu={<FontAwesomeIcon icon={faEllipsisV} className="text-xl " />} screen={"lg"} />
            </p>
          )}
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default ChatNavBar;

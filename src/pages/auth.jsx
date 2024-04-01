import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Sidebar from "../component/home/Sidebar";
import MsgsContainer from "../component/home/MsgsContainer";
import UserChat from "./UserChat";
import ChatRoom from "./ChatRoom";
import { useAllUsers, useChats } from "../zustand/zustand";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import Drawer from "../component/home/Drawer";
import "./auth.css";
import { SocketContext } from "../context/SocketContext";
import NewGroup from "../component/modal/NewGroup";
import toast from "react-hot-toast";
import axios from "axios";
import UserProfileModal from "../component/modal/UserProfile";
import Error from "./Error";

const Auth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 1100);

  // const { setAllUsers, allUsers } = useAllUsers();
  const { setAllUsers, allUsers } = useAllUsers();
  const { setAllChats, allChats } = useChats();
  const { requestApi } = useRequest();
  const { getAuthUser } = useAuth();
  const userId = JSON.parse(getAuthUser("user"))._id;
  const socket = useContext(SocketContext);

  // console.log(JSON.parse(getAuthUser("user"))._id);

  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchData = async () => {
      try {
        const token = getAuthUser("token");
        const header = {
          Authorization: ` Bearer ${token}`,
        };
        // console.log(header);
        const responseUser = await requestApi("/user", {
          method: "GET",
          headers: header,
          signal: abortCtrl.signal,
        });

        if (!responseUser?.users) return;

        const usersData = responseUser.users;
        // console.log(usersData);
        setAllUsers(usersData);
        // console.log(allUsers);
        //////////////////////////////////////////////////////
        const responseChat = await requestApi("/chat", {
          method: "GET",
          headers: header,
          signal: abortCtrl.signal,
        });
        // console.log("responseChat", responseChat);
        setAllChats(responseChat.chat);
        /////////////////////////////////////////////////////
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();

    // socket.once("addUser", userId)
    return () => {
      // socket.disconnect();
      // socket.remove;

      abortCtrl.abort();
    };
  }, []);

  useEffect(() => {
    if (allUsers.length) {
      socket.emit("addUser", userId);
      socket.on("getUsersOnLine", (e) => {
        e.map((e_) => {
          allUsers.map((user) => {
            if (user._id === e_.userId) {
              user.isOnline = true;
              return user;
            }
          });

          allChats?.map((chat) => {
            chat.members.map((member) => {
              // console.log(e_.userId);
              if (member._id === e_.userId) {
                // console.log("true");
                member.isOnline = true;
              }
            });
          });
          // console.log(allChats);
        });

        // console.log(allUsers);
        // console.log(mappingUser);
        // const finallyOnline = mappingUser.filter((e_)=>e_ !== undefined);
        // console.log(finallyOnline);
        // setAllUsers(finallyOnline);
        // console.log(allUsers);
      });
    }

    return () => {
      socket.off("getUsersOnLine");
    };
  }, [allUsers, allChats]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    // const socketConnection = connectionSocket();
    // socketConnection.emit("addUser", userId);

    ///// Socket Connection

    return () => {
      window.removeEventListener("resize", handleResize);
      // socketConnection.disconnect();
    };
  }, []);
  //////////////////////////////////////////////////////////////////////////////////
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // console.log("hi");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmAction = async (groupChatName, selectedUsers) => {
    console.log(groupChatName, selectedUsers);
    const token = getAuthUser("token");
    console.log(token);
    const header = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        "https://chat-app-backend-x0hh.onrender.com/api/v1/chat/groupChat",
        {
          name: groupChatName,
          members: selectedUsers,
        },
        { headers: header }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Group created successfully");
      } else {
        toast.error("Failed to create group");
      }
    } catch (error) {
      toast.error("Error creating group ", error.message);
    }
    closeModal();
  };

  const cancelAction = () => {
    closeModal();
  };

  ////////////////////////////////////////////////////////////////////////////////
  const [ProfilemodalOpen, setProfileModalOpen] = useState(false);
  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  const user = JSON.parse(
    sessionStorage.getItem("user") || localStorage.getItem("user")
  );
  // console.log(user);
  ////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="grid grid-cols-9">
      {isScreenSmall ? null : (
        <div className="col-span-2">
          <Sidebar openModal={openModal} openProfileModal={openProfileModal} />
        </div>
      )}
      <div className={isScreenSmall ? "col-span-9" : "col-span-7"}>
        <NewGroup
          show={modalOpen}
          onClose={closeModal}
          onConfirm={confirmAction}
          onCancel={cancelAction}
        />
        {/* ////////////////////////////////////// */}

        <UserProfileModal
          show={ProfilemodalOpen}
          onClose={closeProfileModal}
          user={user}
        />

        <Routes>
          <Route
            path="/*"
            element={
              <MsgsContainer
                openModal={openModal}
                openProfileModal={openProfileModal}
              />
            }
          >
            <Route path="userchat/*" element={<UserChat />} />
            <Route path="chatroom" element={<ChatRoom />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Auth;

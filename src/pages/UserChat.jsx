
import { useContext, useEffect, useRef, useState } from "react";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import { useAllUsers, useChats, useConversation } from "../zustand/zustand";
import { useParams, useSearchParams } from "react-router-dom";
import Sender from "../component/messages/Sender";
import Resever from "../component/messages/Resever";

import { SocketContext } from "../context/SocketContext";

function UserChat() {
  
  const [messageSocket, setMessageSocket] = useState([
    {
      content: "",
      sender: {},
      updatedAt: Date.now(),
      chat_: "",
    },
  ]);
  const lastMessageRef = useRef();
  const messagesEndRef = useRef(null);
  const { requestApi } = useRequest();
  const { getAuthUser } = useAuth();
  const [page, setPage] = useState(0);
  const user = JSON.parse(getAuthUser("user"));
  const {
    messages,
    setMessages,
    selectedConversation,
    setSelectedConversation,
  } = useConversation();

  const { setAllChats, allChats } = useChats();
  const socket = useContext(SocketContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const user_ = searchParams.get("user_");
  const id = searchParams.get("id");
  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    const token = getAuthUser("token");

    const header = {
      Authorization: `Bearer ${token}`,
    };

    const fetchUser = async () => {
      const response = await requestApi(`/chat/privateChat/${user_}`, {
        method: "POST",
        headers: header,
        signal: abortCtrl.signal,
      });
      
      setSearchParams({ id: response?.chat._id });
      if (response?.chat) {
        if (!allChats?.some((chat) => chat._id === response?.chat._id)) {
          setAllChats([...allChats, response.chat]);
        }
      }
    };

    const fetchData = async () => {
      try {
        const response = await requestApi(`/message/getAllMessages/${id}`, {
          method: "GET",
          headers: header,
          signal: abortCtrl.signal,
        });


        if (!response) return;

        const chatData = response.allMessages;
        chatData.reverse();

        setSelectedConversation([
          ...selectedConversation,
          {
            chat_: id,
            page_: 0,
            messages: [chatData],
          },
        ]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (id && !selectedConversation.some((chat) => chat.chat_ === id) && id.length > 9) {
      fetchData();
    }

    if (user_ ) {
      fetchUser();
    }


    return () => abortCtrl.abort();
  }, [id, user_]);

  useEffect(() => {
    socket.emit("joinChat", id);

    socket.on("getMessage", (m, sender, chat_) => {


      setMessageSocket((prev) => [
        ...prev,
        {
          content: m,
          sender: sender,
          chat_,
          updatedAt: Date.now(),
        },
      ]);

      scrollToBottom();
    });

    return () => {
      socket.off("joinChat", id);
      socket.off("getMessage");
    };
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messageSocket, selectedConversation, id]);
  return (
    <>
      <div className="flex flex-col ">
        
        {selectedConversation[
          selectedConversation.findIndex((chat) => chat.chat_ === id)
        ]?.messages[0].map((message) => (
          <div key={message?._id} className="" ref={lastMessageRef}>
            {user._id === message?.sender?._id ? (
              <>
                <Sender message={message} />

                {/* {console.log(messageSocket)} */}
              </>
            ) : (
              <Resever message={message} />
            )}
          </div>
        ))}

        {messageSocket.map((message) =>
          id === message.chat_
            ? message.content &&
              (user._id === message.sender._id ? (
                <Sender message={message} />
              ) : (
                <Resever message={message} />
              ))
            : null
        )}
      </div>
      {/* </InfiniteScroll> */}

      {/* {console.log(user._id === message.sender._id)} */}
    </>
  );
}

export default UserChat;

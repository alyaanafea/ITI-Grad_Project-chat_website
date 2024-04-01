import useAuth from "../../hooks/useAuth";
import { useConversation } from "../../zustand/zustand";
import Resever from "./Resever";
import Sender from "./Sender";
const Message = () => {
  const {
    messages,
    setMessages,
    selectedConversation,
    setSelectedConversation,
  } = useConversation();
  const { getAuthUser } = useAuth();
  const user = JSON.parse(getAuthUser("user"));

  return (
    <>
      {messages.map((message) => (
        <>
          {console.log(user._id === message.sender._id)}
          {user._id === message.sender._id ? (
            <Sender key={message.sender} message={message.sender} />
          ) : (
            <Resever key={message._id} />
          )}
        </>
      ))}
    </>
  );
};

export default Message;

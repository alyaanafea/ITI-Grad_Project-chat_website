import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAllUsers } from "../../zustand/zustand";
import Avatar from "../Avatar";
import toast from "react-hot-toast";

function NewGroup({ show, onClose, onConfirm, onCancel }) {
  const { allUsers } = useAllUsers();
  const [groupChatName, setGroupChatName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGroupChatNameChange = (event) => {
    setGroupChatName(event.target.value);
  };

  const handleUserSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const handleUserClick = (userId) => {
    if (!selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, userId]);
    }
  };

  const handleDeleteUser = (userId) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.filter((id) => id !== userId)
    );
  };

  const handleSubmit = () => {
    if (!groupChatName) {
      toast.error("Group name is required");
      return;
    }

    if (selectedUsers.length < 2) {
      toast.error("At least 2 users must be added");
      return;
    }

    onConfirm(groupChatName, selectedUsers);
  };

  const filteredUsers = allUsers.filter(
    (user) =>
      user.firstname.toLowerCase().includes(search.toLowerCase()) ||
      user.lastname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`fixed z-[100] inset-0 overflow-y-auto w-full ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="relative bgsearch text-white rounded-lg p-8 w-4/5 md:w-3/5 lg:w-2/5 mt-2 ">
          <div className="absolute top-0 right-0 mt-3 mr-4">
            <button onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6 " />
            </button>
          </div>
          <h2 className="font-bold text-2xl">Create New Group Chat</h2>
          <div className="mt-3">
            <label
              htmlFor="group-chat-name"
              className="block text-sm font-medium mb-2"
            >
              Group Chat Name
            </label>
            <input
              type="text"
              id="group-chat-name "
              value={groupChatName}
              onChange={handleGroupChatNameChange}
              className="mt-1 p-2 border border-gray-300 text-zinc-950 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="user-search"
              className="block text-sm font-medium mb-2"
            >
              Search For User
            </label>
            <input
              type="text"
              id="user-search"
              value={search}
              onChange={handleUserSearchChange}
              className="mt-1 p-2 border border-gray-300  text-zinc-950 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />
            <div className=" mt-3  scrollbar overflow-y-scroll h-44  md:h-56">
              {filteredUsers.map((user) => (
                <div
                  key={user._id}
                  onClick={() => handleUserClick(user._id)}
                  className="cursor-pointer hover:bg-gray-500 rounded-md p-2 mt-1"
                >
                  <div className="flex gap-2 items-center">
                    <Avatar isMessage={true} initImage={user.image} />
                    <p>{`${user.firstname} ${user.lastname}`}</p>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 h-24 md:h-15 mb-3">
            {selectedUsers.map((userId) => {
              const selectedUser = allUsers.find((user) => user._id === userId);
              return (
                <span
                  key={userId}
                  className="inline-block bg-white rounded-full px-3   h-6 text-sm font-semibold text-black mr-2"
                >
                  {`${selectedUser.firstname} ${selectedUser.lastname}`}
                  <button
                    onClick={() => handleDeleteUser(userId)}
                    className="ml-2 text-gray-400"
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-3 w-3 " />
                  </button>
                </span>
              );
            })}
          </div>
          <div
            className="mt-4
           flex justify-end"
          >
            <button
              onClick={handleSubmit}
              className="btn bg-black text-white mr-2 hover:bg-black"
            >
              Confirm
            </button>
            <button onClick={onCancel} className="btn ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGroup;

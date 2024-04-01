import { create } from "zustand";

export const useConversation = create((set) => ({
  selectedConversation: [],
  setSelectedConversation: (selectedConversation) => {
    // console.log("Updating selectedConversation:", selectedConversation);
    set({ selectedConversation });
  },

  messages: [],
  setMessages: (messages) => {
    console.log("Updating messages:", messages);
    set({ messages });
  },
}));

export const useChats = create((set) => ({
  allChats: [],
  setAllChats: (allChats) => {
    console.log("Updating AllChats:", allChats);
    set({ allChats });
  },
}));

// Private Chats
export const useChatPrivate = create((set) => ({
  allChatsPrivate: [],
  setAllChatsPrivate: (allChatsPrivate) => {
    // console.log("Updating AllChatsPrivate:", allChatsPrivate);
    set({ allChatsPrivate });
  },
}));

export const useAllUsers = create((set) => ({
  allUsers: [],
  setAllUsers: (users) => {
    // console.log("Updating allUsers:", users); // Log when allUsers is being updated
    set({ allUsers: users });
  },
}));
// useAllUsers.subscribe((state) => console.log("allUsers:", state.allUsers));

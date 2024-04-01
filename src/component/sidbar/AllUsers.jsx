/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import User from "../users/User";
import { Link } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { useChats, useAllUsers } from "../../zustand/zustand";
import "./AllUsers.css";
import { useEffect, useState } from "react";



const AllUsers = (props) => {
  const { isChat , allChats , allUsers , searchChat } = props;

  const { loading_ } = useRequest();

  return (
    <>
      {loading_ ? (
        <div>Loading...</div>
      ) : (
        <div className="p-5 w-full col-span-2">
          {/* {
        console.log({data_})
      } */}
          {/* {console.log(allUsers)} */}
          <h4 className="font-medium pb-4">All Users</h4>
          <div className="flex flex-col scrol scrollbar items-start   gap-5">
            {isChat ? (
              <>
                {searchChat?.map((chat) => (
                  <Link key={chat._id} to={`/home/userchat/?id=${chat._id}`}>
                    {/* {console.log(chat)} */}
                    <User user={chat} isChat={isChat} />
                  </Link>
                ))}
              </>
            ) : (
              <>
                {searchChat?.map((user) => (
                  <Link key={user._id} to={`/home/userchat/?user_=${user._id}`}>
                    <User user={user} isChat={isChat} mode={user.isOnline} />
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AllUsers;

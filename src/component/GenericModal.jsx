import React, { useCallback, useRef, useState } from "react";
import useRequest from "../hooks/useRequest";
import useAuth from "../hooks/useAuth";
import { useSearchParams } from "react-router-dom";
import { useChats } from "../zustand/zustand";
import { useNavigate } from "react-router-dom";


//// can use it in every where you want to show a modal for exit group or delete account
export default function GenericModal({content , header , setDialog , dialog , url}) {
    const dialog_ref = useRef(null);
    //Custom Hooks
    const { requestApi } = useRequest();
    const { getAuthUser ,removeAuthUser } = useAuth();

    //React Router dom
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    //Zustand
    const { setAllChats, allChats } = useChats();

    const token = useCallback(async () => {
        const authUser =  getAuthUser('token');
        return authUser;
      }, [getAuthUser]);

    const id = searchParams.get("id");
    
    if(dialog) dialog_ref.current.showModal();

    const request = async()=>{
        try {
            const header_ = {
                Authorization: `Bearer ${await token()}`,
              };
              if(url === "chat/exitGroup"){
                const response = await requestApi(url, {
                  method: "POST",
                  headers: header_,
                  data: {
                      chatId: id,
                  },
                });
                if(response.message === "User exit from group successfully"){
                  const newChats = allChats.filter((chat)=> chat._id !== id);
                  setAllChats(newChats);
                  navigate("/home/userchat");
                } 
              }

              if(url === "auth/delete"){
                const response = await requestApi(url, {
                  method: "DELETE",
                  headers: header_,
                });

                if(response.message === "User deleted successfully"){
                  removeAuthUser();
                  navigate(0);
                }
              }
           
            setDialog(!dialog)
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={dialog_ref}>
        <div className="modal-box bg-slate-600">
          <h3 className="font-bold text-lg">{header}</h3>
          <p className="py-4">
            {content}
          </p>
          <div className="modal-action">
            <form method="dialog" className=" flex gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error btn-outline" onClick={request}>Sure!</button>
              <button className="btn" onClick={()=>setDialog((prev)=>!prev)}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";

const User = (props) => {
  const { user, isChat = false, initImage = user.image, mode } = props;
  const { getAuthUser } = useAuth();
  const { _id } = JSON.parse(getAuthUser("user"));

  return (
    <div className="chat chat-start flex justify-center items-center">
      {isChat ? (
        user?.members?.length > 2 ? (
          "group"
        ) : (

          // <>
          // member._id ? (
          //     member._id == userId ? null : (
          //       <Avatar isMessage={true} initImage={member.image} />
          //     )
          //   ) : member == userId ? null : (
          //     <Avatar isMessage={true} initImage={member.image} />
          //   )
          // )
          // </>
          user?.members?.map((member) =>
          member._id ? (
            member._id == _id ? null : (
              <>
                {/* {console.log(member)} */}
                <Avatar
                  isMessage={true}
                  initImage={isChat ? member.image : initImage}
                  mode={member.isOnline ? "online" : "offline"}
                />
              </>
            )): member == _id ? null : (
              <Avatar
              isMessage={true}
              initImage={isChat ? member.image : initImage}
              mode={member.isOnline ? "online" : "offline"}
            />
            )
          ) 
        )
      ) : (
        <Avatar
          isMessage={true}
          initImage={initImage}
          mode={mode ? "online" : "offline"}
        />
      )}

      <div className="chat-header">
        {isChat
          ? user?.name
          : `${user?.firstname} ${user.lastname ? user.lastname : ""}`}

        {isChat ? (
          <div className=" opacity-80 w-40 h-5 chat-footer  overflow-hidden truncate ">
            {user.latestMessage?.content}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default User;

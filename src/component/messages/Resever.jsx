/* eslint-disable react/prop-types */
// import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
const Resever = (props) => {
  // console.log(props);
  const { content, sender, updatedAt } = props.message;
  // console.log(updatedAt);
  // TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  // console.log("timeAgo", timeAgo.format(new Date(updatedAt)));

  return (
    <div className="chat chat-start">
      <Avatar isMessage={true} initImage={sender?.image ? sender.image : ""} />
      {/* {console.log(props)} */}
      <div className="chat-header">
        {sender?.firstname}
        {"  "}
        {sender?.lastname}
      </div>
      <div className="chat-bubble overflow-x-auto">{content}</div>
      <time className="chat-footer text-xs opacity-50">
        {timeAgo.format(new Date(updatedAt))}
      </time>

      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  );
};

export default Resever;

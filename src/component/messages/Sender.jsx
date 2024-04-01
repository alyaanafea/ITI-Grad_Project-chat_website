/* eslint-disable react/prop-types */
import Avatar from "../Avatar";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
const Sender = (props) => {
  
  const { content, updatedAt=Date.now() } = props.message;
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  // console.log("timeAgo", timeAgo.format(new Date(updatedAt)));
  return (
    <div className="chat chat-end  ">
      <div className="chat-bubble overflow-x-clip ">
        {content}
        </div>
      <time className="chat-footer text-xs opacity-50">
        {timeAgo.format(new Date(updatedAt))}
      </time>

      <div className="chat-footer opacity-50">
        {/* Seen at 12:46 <span className="text-blue-700">**</span> */}
      </div>
    </div>
  );
};

export default Sender;

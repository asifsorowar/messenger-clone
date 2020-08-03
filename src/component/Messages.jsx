import React, { useContext } from "react";
import userContext from "./../context/userContext";
import "./message.css";
import FlipMove from "react-flip-move";

const Messages = ({ messages }) => {
  const { username } = useContext(userContext);

  const isUser = (message) => username === message.username;

  return (
    <div>
      <FlipMove>
        {messages.map((message) => (
          <div
            className={isUser(message) ? "container_user" : "container_other"}
            key={message.id}
          >
            <div className="subContainer">
              <p className="userName">{message.username || "Unknown User"}</p>
              <p className={isUser(message) ? "text_user" : "text_other"}>
                {message.message}
              </p>
              <p className="time">
                {message.time &&
                  new Date(Date(message.time.nanoseconds)).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default Messages;

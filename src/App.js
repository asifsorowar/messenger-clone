import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";
import Messages from "./component/Messages";
import userContext from "./context/userContext";
import db from "./firebase";
import MessageForm from "./component/MessageForm";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const getMessages = () => {
    db.collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  };

  useEffect(() => {
    setUsername(prompt("Enter you username"));
    getMessages();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      username,
      message: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <userContext.Provider value={{ username }}>
      <div className="App">
        <h1>
          Welcome{" "}
          <span style={{ color: "#006AFF" }}>
            {(username && username.toUpperCase()) || "Unknown User"}
          </span>
        </h1>
        <h6>From Asif Sorowar</h6>
        <Messages messages={messages} />
        <MessageForm
          setInput={setInput}
          input={input}
          sendMessage={sendMessage}
        />
      </div>
    </userContext.Provider>
  );
}

export default App;

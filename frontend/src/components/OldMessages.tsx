import React from "react";


interface IMessagesHistory {
    MessagesHistory: {
        data: string
    }[] 
}

const OldMessages = ({ MessagesHistory } :IMessagesHistory) => {

  const messages = MessagesHistory.map((msg, index) => (
    <p key={index}>{msg.data}</p>
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default OldMessages;
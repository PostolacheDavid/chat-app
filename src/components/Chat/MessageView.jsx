import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const MessageView = () => {
  const messages = useSelector((store) => store.messages);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="MessageView">
      {messages.length === 0 && (
        <h1 className="center">Type something to start chatting</h1>
      )}
      {messages.map((msg) => {
        return (
          <div
            key={msg.id}
            className={`message-bubble ${
              msg.sender === "bot" ? "bot" : "user"
            }`}
          >
            {msg.text}
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageView;

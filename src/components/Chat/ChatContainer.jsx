import MessageView from "./MessageView";
import MessageInput from "./MessageInput";

const ChatContainer = () => {
  return (
    <main>
      <div className="ChatContainer">
        <MessageView />
        <MessageInput />
      </div>
    </main>
  );
};

export default ChatContainer;

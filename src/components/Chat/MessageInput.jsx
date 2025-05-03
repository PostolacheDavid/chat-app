import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessageWithBotReply } from "../../features/messages/botActions";
import { openModal } from "../../features/modal/modalSlice";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      dispatch(openModal());
      return;
    }
    dispatch(sendMessageWithBotReply(message));
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <p>
          <label htmlFor="message" className="offscreen">
            Your Message:
          </label>
          <input
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </p>
        <button type="submit">
          <IoSendSharp />
        </button>
      </fieldset>
    </form>
  );
};

export default MessageInput;

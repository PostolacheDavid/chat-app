import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
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

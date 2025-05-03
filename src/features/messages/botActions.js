import { addMessage } from "./messagesSlice";

const getBotReply = (userMessage) => {
  const msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi"))
    return "Hi there! 👋 How can I help?";
  if (msg.includes("how are you"))
    return "I'm just a bunch of code, but I'm doing great! 😄";
  if (msg.includes("your name"))
    return "I'm ChatBot — your local assistant 🤖.";
  if (msg.includes("time")) return `🕒 It's ${new Date().toLocaleTimeString()}`;
  if (msg.includes("date"))
    return `📅 Today is ${new Date().toLocaleDateString()}`;
  if (msg.includes("bye") || msg.includes("goodbye"))
    return "Goodbye! 👋 Have a great day!";
  if (msg.includes("thanks") || msg.includes("thank you"))
    return "You're welcome! 🙏";
  if (msg.includes("joke"))
    return "Why don't programmers like nature? It has too many bugs. 🐛";
  if (msg.includes("help"))
    return "Try saying things like 'hello', 'time', 'joke', 'date', 'bye', 'thanks', 'weather' or 'your name'.";
  if (msg.includes("weather"))
    return "I'm not connected to the internet, so I can't tell you that... yet! 🌤️";

  return "Hmm... I don't understand that. Try saying 'help' to see what I can do.";
};

export const sendMessageWithBotReply = (text) => (dispatch) => {
  dispatch(addMessage({ text, sender: "user" }));

  setTimeout(() => {
    const botResponse = getBotReply(text);
    dispatch(addMessage({ text: botResponse, sender: "bot" }));
  }, 700);
};

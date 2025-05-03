import { useSelector } from "react-redux";
import ChatContainer from "./components/Chat/ChatContainer";
import Modal from "./components/modal/Modal";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <>
      {isOpen && <Modal />}
      <ChatContainer />
    </>
  );
}

export default App;

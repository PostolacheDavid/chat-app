import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay">
      <aside className="modal">
        <h1>Message cannot be empty!</h1>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Ok
        </button>
      </aside>
    </div>
  );
};

export default Modal;

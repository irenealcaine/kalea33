import "./Modal.scss";
import Button from "../Button/Button.jsx";

const Modal = ({ photo, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={photo.url} alt={photo.title} />
        <Button color={"red"} value={"Cerrar"} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;

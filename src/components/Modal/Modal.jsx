import "./Modal.scss";

const Modal = ({ photo, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={photo.url} alt={photo.title} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;

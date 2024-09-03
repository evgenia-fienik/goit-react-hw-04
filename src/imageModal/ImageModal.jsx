import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root')
const ImageModal = ({ image, onClose }) => {
      return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img src={urls.regular} alt={alt_description} className={css.img} />
        <p><strong>Author:</strong> {user.name}</p>
        <p><strong>likes:</strong> {likes}</p>
        {description && <p><strong>Description:</strong> {description}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
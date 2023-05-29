import cl from './MyModal.module.css';

const MyModal = ({ visible, setVisible, children }) => {
  return (
    <div
      className={`${cl.overlay} ${visible ? cl.active : ''}`}
      onClick={() => setVisible(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className={cl.modal}>
        {children}
      </div>
    </div>
  );
};
export default MyModal;

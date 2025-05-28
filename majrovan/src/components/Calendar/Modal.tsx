import { ReactNode } from "react";
import style from './modal.module.css'


interface ModalProps {
    children: ReactNode;
    onClose: () => void;
  }
  

  const Modal: React.FC<ModalProps> = ({ children, onClose }) => {

return (
    <div className={style.modalPopup}>
        <div 
        className={style.calendarModal}> 
            {children}
            <button onClick={onClose}>Stäng</button>
        </div>
    </div>
);

};

export default Modal;
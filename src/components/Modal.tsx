import { FC, ReactNode, useEffect, useRef, useState, KeyboardEvent } from 'react';



interface Props {
  isOpen: boolean,
  hasCloseBtn?: boolean,
  onClose?: () => void,
  children: ReactNode,
}
	

export const  Modal: FC<Props> = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if(onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if(e.key === "Escape") {
      handleCloseModal();
    }
  };



  useEffect(() => {
    setModalOpen(isOpen);
    }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if(modalElement) {
      if(isModalOpen) {
      console.log('isModalOpen', isModalOpen, modalElement, modalRef)
      modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);


	return (
  <dialog ref={modalRef} className="modal-dialog" onKeyDown={handleKeyDown}>
    {hasCloseBtn && (
      <button className="modal-close-btn" onClick={handleCloseModal}>
        Close
      </button>
    )}
    {children}
  </dialog>
			
		)
}

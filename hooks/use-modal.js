import { useState } from 'react';

function useModal() {
  const [isActive, setState] = useState(false);
  const closeModal = () => setState(false);

  const [modalProps, setModalProps] = useState({
    onClose: closeModal,
  });

  const openModalWithProps = (props) => {
    setState(true);
    setModalProps({ ...modalProps, ...props });
  };

  return {
    isOpen: isActive,
    openModal: () => setState(true),
    closeModal,
    openModalWithProps,
    modalProps,
    setModalProps,
  };
}

export default useModal;

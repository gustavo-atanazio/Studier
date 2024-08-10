import { useMemo } from 'react';
import ReactModal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import Form from 'components/Form';
import { useModalContext } from 'context/Modal';

function Modal() {
  const { open, quizID, closeModal } = useModalContext();
  const CloseIcon = useMemo(() => <IoMdClose size={35} cursor='pointer'/>, []);

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }
      }}
      className='bg-neutral-800 w-4/5 max-h-[80%] overflow-y-auto self-center p-4 text-neutral-200 rounded outline-0'
    >
      <div className='flex justify-end mb-2' onClick={closeModal}>
        {CloseIcon}
      </div>

      <Form quizID={quizID}/>
    </ReactModal>
  );
}

export default Modal;
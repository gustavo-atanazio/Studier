import ReactModal from 'react-modal';

import Form from 'components/Form';
import { useModalContext } from 'context/Modal';

function Modal() {
    const { open, quizID } = useModalContext();

    return (
        <ReactModal isOpen={open} ariaHideApp={false}>
            <Form quizID={quizID}/>
        </ReactModal>
    );
}

export default Modal;
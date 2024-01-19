import { createContext, useContext, useState } from 'react';

interface ModalContextType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: (quizID: string) => void;
    closeModal: () => void;
    quizID: string;
    setQuizID: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue: ModalContextType = {
    open: false,
    setOpen: () => {},
    openModal: () => {},
    closeModal: () => {},
    quizID: '',
    setQuizID: () => {}
};

const ModalContext = createContext<ModalContextType>(initialValue);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [quizID, setQuizID] = useState('');

    function openModal(quizID: string) {
        setOpen(true);
        setQuizID(quizID);
    }

    const closeModal = () => setOpen(false);

    const value = {
        open, setOpen,
        openModal, closeModal,
        quizID, setQuizID
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

function useModalContext() {
    return useContext(ModalContext);
}

export { ModalContext, ModalContextProvider, useModalContext };
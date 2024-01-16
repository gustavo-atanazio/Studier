import { createContext, useContext, useState } from 'react';
import IQuiz from 'types/IQuiz';
import IQuestion from 'types/IQuestion';

const initialValue = {
    quizzes: [],
    setQuizzes: () => {},
    createQuiz: () => {}
};

interface QuizContextType {
    quizzes: IQuiz[];
    setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
    createQuiz: (name: string, questions: IQuestion[]) => void;
}

const QuizzesContext = createContext<QuizContextType>(initialValue);

function QuizzesContextProvider({ children }: { children: React.ReactNode }) {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

    function createQuiz(name: string, questions: IQuestion[]) {
        const quiz = {
            name,
            questions,
            id: crypto.randomUUID()
        };

        setQuizzes(prevState => [...prevState, quiz]);
    }

    const value = {
        quizzes, setQuizzes,
        createQuiz
    };

    return (
        <QuizzesContext.Provider value={value}>
            {children}
        </QuizzesContext.Provider>
    );
}

function useQuizzesContext() {
    return useContext(QuizzesContext);
}

export { QuizzesContext, QuizzesContextProvider, useQuizzesContext };
import { createContext, useContext, useState } from 'react';
import IQuiz from 'types/IQuiz';

const initialValue = {
    quizzes: [],
    setQuizzes: () => {}
};

interface QuizContextType {
    quizzes: IQuiz[];
    setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
}

const QuizzesContext = createContext<QuizContextType>(initialValue);

function QuizzesContextProvider({ children }: { children: React.ReactNode }) {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

    const value = {
        quizzes, setQuizzes
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
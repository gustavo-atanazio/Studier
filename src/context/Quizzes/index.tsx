import { createContext, useContext, useEffect, useState } from 'react';

import { getFromLocalStorage, updateLocalStorage } from 'utils/localStorage';
import IQuiz from 'types/IQuiz';
import IQuestion from 'types/IQuestion';

interface QuizContextType {
  quizzes: IQuiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
  createQuiz: (name: string, questions: IQuestion[]) => void;
  editQuiz: ({ name, questions, id }: IQuiz) => void;
  deleteQuiz: (id: string) => void;
}

const initialValue: QuizContextType = {
  quizzes: [],
  setQuizzes: () => {},
  createQuiz: () => {},
  editQuiz: () => {},
  deleteQuiz: () => {}
};

const QuizzesContext = createContext<QuizContextType>(initialValue);

function QuizzesContextProvider({ children }: { children: React.ReactNode }) {
  const [quizzes, setQuizzes] = useState<IQuiz[]>(getFromLocalStorage('QUIZZES') || []);

  function createQuiz(name: string, questions: IQuestion[]) {
    const quiz = {
      name,
      questions,
      id: crypto.randomUUID()
    };

    setQuizzes(prevState => [...prevState, quiz]);
  }

  function editQuiz({ name, questions, id }: IQuiz) {
    setQuizzes(prevState => {
      const updatedQuizzes = prevState.map(quiz =>
        quiz.id === id ? { ...quiz, name, questions } : quiz
      );

      return updatedQuizzes;
    });
  }

  function deleteQuiz(id: string) {
    const updatedQuizzes = quizzes.filter(quiz => quiz.id !== id);
    setQuizzes(updatedQuizzes);
  }

  const value = {
    quizzes,
    setQuizzes,
    createQuiz,
    editQuiz,
    deleteQuiz
  };

  useEffect(() => {
    updateLocalStorage('QUIZZES', quizzes);
  }, [quizzes]);

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
import { createContext, useContext, useState } from 'react';
import IQuiz from 'types/IQuiz';

interface GameContextType {
    quiz: IQuiz;
    setQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
}

const initialValue: GameContextType = {
    quiz: {
        name: '',
        questions: [],
        id: '' 
    },
    setQuiz: () => {}
};

const GameContext = createContext<GameContextType>(initialValue);

function GameContextProvider({ children }: { children: React.ReactNode }) {
    const [quiz, setQuiz] = useState<IQuiz>(initialValue.quiz);

    const value = {
        quiz, setQuiz
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

function useGameContext() {
    return useContext(GameContext);
}

export { GameContext, GameContextProvider, useGameContext };
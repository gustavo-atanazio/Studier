import { createContext, useContext, useReducer } from 'react';
import IQuiz from 'types/IQuiz';

type State = {
  quiz: IQuiz;
  currentQuestion: number;
  hasAnswered: boolean;
  correctAnswers: number;
  gameOver: boolean;
};

type Action =
  { type: 'START_GAME'; quiz: IQuiz }
  | { type: 'NEXT_QUESTION' }
  | { type: 'CHECK_ANSWER'; answer: string }
  | { type: 'GAME_OVER' }
;

const initialState: State = {
  quiz: {
    name: '',
    questions: [],
    id: ''
  },
  currentQuestion: 0,
  hasAnswered: false,
  correctAnswers: 0,
  gameOver: false
};

function GameReducer(state: State, action: Action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        quiz: action.quiz
      };

    case 'CHECK_ANSWER': {
      const answerIsCorrect = action.answer === state.quiz.questions[state.currentQuestion].response;

      return {
        ...state,
        hasAnswered: true,
        correctAnswers: answerIsCorrect ? state.correctAnswers + 1 : state.correctAnswers
      };
    }

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        hasAnswered: false
      };

    case 'GAME_OVER':
      return {
        ...state,
        gameOver: true
      };

    default:
      return state;
  }
}

type GameContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const GameContext = createContext<GameContextType>({ state: initialState, dispatch: () => {} });

function GameContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

function useGameContext() {
  return useContext(GameContext);
}

export { GameContext, GameContextProvider, useGameContext };
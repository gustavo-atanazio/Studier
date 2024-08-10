import React from 'react';
import ReactDOM from 'react-dom/client';

import { QuizzesContextProvider } from 'context/Quizzes/index.tsx';
import { GameContextProvider } from 'context/Game/index.tsx';
import { ModalContextProvider } from 'context/Modal/index.tsx';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizzesContextProvider>
      <GameContextProvider>
        <ModalContextProvider>
          <App/>
        </ModalContextProvider>
      </GameContextProvider>
    </QuizzesContextProvider>
  </React.StrictMode>
);
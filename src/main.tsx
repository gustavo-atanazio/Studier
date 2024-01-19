import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QuizzesContextProvider } from 'context/Quizzes/index.tsx';
import { ModalContextProvider } from 'context/Modal/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QuizzesContextProvider>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </QuizzesContextProvider>
    </React.StrictMode>,
);

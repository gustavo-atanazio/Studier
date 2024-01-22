import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from 'components/Sidebar';

import Home from 'pages/Home';
import NewQuiz from 'pages/NewQuiz';
import MyQuizzes from 'pages/MyQuizzes';
import Game from 'pages/Game';

function AppRouter() {
    return (
        <BrowserRouter>
            <Sidebar/>

            <main className='bg-neutral-800 w-full h-full text-neutral-200 py-6 px-10 overflow-scroll overflow-x-hidden'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/novo-quiz' element={<NewQuiz/>}/>
                    <Route path='/meus-quizzes' element={<MyQuizzes/>}/>

                    <Route path='/game' element={<Game/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default AppRouter;
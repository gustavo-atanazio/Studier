import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from 'components/Sidebar';

import Home from 'pages/Home';
import NewQuiz from 'pages/NewQuiz';
import MyQuizzes from 'pages/MyQuizzes';

function AppRouter() {
    return (
        <BrowserRouter>
            <Sidebar/>

            <main className='bg-neutral-800 w-full text-neutral-200 py-6 px-10 overflow-scroll'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/novo-quiz' element={<NewQuiz/>}/>
                    <Route path='/meus-quizzes' element={<MyQuizzes/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default AppRouter;
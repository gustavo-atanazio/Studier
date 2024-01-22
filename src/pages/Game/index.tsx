import { useState } from 'react';
import { useGameContext } from 'context/Game';

function Game() {
    const { quiz } = useGameContext();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const title = quiz.questions[currentQuestion].title;
    const options = quiz.questions[currentQuestion].options;
    const response = quiz.questions[currentQuestion].response;

    return (
        <section className='flex flex-col gap-6 h-full'>
            <h2 className='text-4xl mb-6'>{quiz.name}</h2>

            <p className='text-2xl'>{title}</p>

            <div className='flex flex-wrap gap-4'>
                {options.map((option, index) => (
                    <div
                        className='flex-grow basis-64 bg-slate-800 p-2 text-xl text-center rounded'
                        key={index}
                    >
                        {option}
                    </div>
                ))}
            </div>

            <button
                className='text-xl w-1/2 bg-gray-700 rounded p-2 self-center'
                onClick={() => setCurrentQuestion(prevState => prevState += 1)}
                type='button'
            >
                Avançar
            </button>
        </section>
    );
}

export default Game;
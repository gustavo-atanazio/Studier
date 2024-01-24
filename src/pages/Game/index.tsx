import { useNavigate } from 'react-router-dom';
import { useGameContext } from 'context/Game';

function Game() {
    const navigate = useNavigate();
    const { state, dispatch } = useGameContext();

    const {
        quiz,
        currentQuestion,
        hasAnswered,
        correctAnswers,
        gameOver
    } = state;

    const isLastQuestion = currentQuestion + 1 >= quiz.questions.length;
    let title, options;

    if (currentQuestion < quiz.questions.length) {
        title = quiz.questions[currentQuestion].title;
        options = quiz.questions[currentQuestion].options;
    }

    return (
        <section className='flex flex-col gap-6 h-full'>
            {gameOver
                ? (
                    <>
                        <h2 className='text-4xl mb-6'>O quiz acabou!</h2>

                        <p className='text-2xl text-center mb-6'>
                            Você acertou {correctAnswers} de {quiz.questions.length} perguntas!
                        </p>

                        <button
                            className='text-xl w-1/2 bg-gray-700 rounded p-2 self-center outline-0'
                            onClick={() => navigate('/')}
                        >
                            Voltar para a Home
                        </button>
                    </>
                )

                : (
                    <>
                        <div>
                            <h2 className='text-4xl mb-2'>{quiz.name}</h2>
                            <p className='text-md'>{`Questão ${currentQuestion + 1} de ${quiz.questions.length}`}</p>
                        </div>

                        <p className='text-2xl'>{title}</p>

                        <div className='flex flex-wrap gap-4'>
                            {options?.map((option, index) => (
                                <div
                                    className={`
                                        flex-grow basis-64 
                                        p-2 text-xl text-center cursor-pointer rounded
                                        bg-slate-800
                                        ${hasAnswered && 'pointer-events-none'}
                                    `}
                                    onClick={() => dispatch({ type: 'CHECK_ANSWER', answer: option })}
                                    key={index}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        <button
                            className={
                                `text-xl w-1/2 
                                bg-gray-700 ${hasAnswered && 'bg-green-600'}
                                transition-colors rounded p-2 self-center outline-0`
                            }
                            onClick={() => {
                                if (isLastQuestion) dispatch({ type: 'GAME_OVER' });
                                else dispatch({ type: 'NEXT_QUESTION' });
                            }}
                            disabled={!hasAnswered}
                            type='button'
                        >
                            Avançar
                        </button>
                    </>
                )
            }
        </section>
    );
}

export default Game;
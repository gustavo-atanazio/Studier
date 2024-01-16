import { FaRegCirclePlay } from 'react-icons/fa6';
import IQuiz from 'types/IQuiz';

function Card({ name, questions, id }: IQuiz) {
    return (
        <div className='bg-slate-800 flex flex-col p-4 rounded gap-6 w-full'>
            <div>
                <h4 className='text-2xl overflow-hidden text-ellipsis'>{name}</h4>
                <p>{questions.length} pergunta{questions.length > 1 ? 's' : ''}</p>
            </div>

            <span className='p-2 text-center rounded bg-neutral-500 text-nowrap overflow-hidden text-ellipsis'>
                {questions[0].title}
            </span>

            <button
                className='flex gap-2 justify-center items-center bg-green-600 p-2 rounded'
                type='button'
            >
                Começar
                <FaRegCirclePlay size={20}/>
            </button>
        </div>
    );
}

export default Card;
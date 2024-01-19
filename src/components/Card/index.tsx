import { FaRegCirclePlay } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useQuizzesContext } from 'context/Quizzes';
import { useModalContext } from 'context/Modal';
import IQuiz from 'types/IQuiz';

interface Props extends IQuiz {
    path: string;
}

function Card({ name, questions, id, path }: Props) {
    const { deleteQuiz } = useQuizzesContext();
    const { openModal } = useModalContext();

    return (
        <div className='bg-slate-800 flex flex-col p-4 rounded gap-6 w-full'>
            <div>
                <h4 className='text-2xl overflow-hidden text-ellipsis'>{name}</h4>
                <p>{questions.length} pergunta{questions.length > 1 ? 's' : ''}</p>
            </div>

            <span className='p-2 text-center rounded bg-neutral-500 text-nowrap overflow-hidden text-ellipsis'>
                {questions[0].title}
            </span>

            {path === '/'
                ? (
                    <button
                        className='flex gap-2 justify-center items-center bg-green-600 p-2 rounded'
                        type='button'
                    >
                        Começar
                        <FaRegCirclePlay size={20}/>
                    </button>
                )

                : (
                    <div className='flex flex-col gap-2'>
                        <button
                            className='flex gap-2 justify-center items-center bg-neutral-700 p-2 w-full rounded'
                            type='button'
                            onClick={() => openModal(id)}
                        >
                            Editar
                            <FiEdit size={20}/>
                        </button>

                        <button
                            className='flex gap-2 justify-center items-center bg-red-600 p-2 w-full rounded'
                            type='button'
                            onClick={() => deleteQuiz(id)}
                        >
                            Deletar
                            <RiDeleteBinLine size={20}/>
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Card;
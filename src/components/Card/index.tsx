import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useQuizzesContext } from 'context/Quizzes';
import { useModalContext } from 'context/Modal';
import { useGameContext } from 'context/Game';

import IQuiz from 'types/IQuiz';

interface Props extends IQuiz {
  renderDelay: number;
  path: string;
}

function Card({ name, questions, id, renderDelay, path }: Props) {
  const navigate = useNavigate();
  const { deleteQuiz } = useQuizzesContext();
  const { openModal } = useModalContext();
  const { dispatch } = useGameContext();

  const PlayIcon = useMemo(() => <FaRegCirclePlay size={20}/>, []);
  const EditIcon = useMemo(() => <FiEdit size={20}/>, []);
  const DeleteIcon = useMemo(() => <RiDeleteBinLine size={20}/>, []);

  return (
    <motion.div
      className='bg-slate-800 flex flex-col p-4 justify-between rounded gap-6 w-full'
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, delay: renderDelay / 10 }}
      layout
    >
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
            className='flex gap-2 justify-center items-center bg-green-600 p-2 rounded outline-0'
            type='button'
            onClick={() => {
              dispatch({ type: 'START_GAME', quiz: { name, questions, id } });
              navigate('/game');
            }}
          >
            Começar
            {PlayIcon}
          </button>
        )

        : (
          <div className='flex flex-col gap-2'>
            <button
              className='flex gap-2 justify-center items-center bg-neutral-700 p-2 w-full rounded outline-0'
              type='button'
              onClick={() => openModal(id)}
            >
              Editar
              {EditIcon}
            </button>

            <button
              className='flex gap-2 justify-center items-center bg-red-600 p-2 w-full rounded outline-0'
              type='button'
              onClick={() => deleteQuiz(id)}
            >
              Deletar
              {DeleteIcon}
            </button>
          </div>
        )
      }
    </motion.div>
  );
}

export default Card;
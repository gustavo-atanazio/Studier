import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { GoHomeFill } from 'react-icons/go';
import { FaPlus } from 'react-icons/fa6';
import { LuLibrary } from 'react-icons/lu';

function Sidebar() {
  const HomeIcon = useMemo(() => <GoHomeFill size={35}/>, []);
  const PlusIcon = useMemo(() => <FaPlus size={35}/>, []);
  const LibIcon = useMemo(() => <LuLibrary size={35}/>, []);

  return (
    <aside className='flex justify-between gap-8 p-6 bg-purple-900 w-full text-neutral-100 md:w-64 md:flex-col md:justify-start'>
      <h1 className='text-3xl'>Studier</h1>

      <Link to={'/'} className='flex items-center gap-6 text-2xl md:p-3 md:rounded md:hover:bg-purple-600 md:transition-colors'>
        {HomeIcon}
        <span className='hidden md:block'>Home</span>
      </Link>

      <Link to={'/novo-quiz'} className='flex items-center gap-6 text-2xl md:p-3 md:rounded md:hover:bg-purple-600 md:transition-colors'>
        {PlusIcon}
        <span className='hidden md:block'>Novo</span>
      </Link>

      <Link to={'/meus-quizzes'} className='flex items-center gap-6 text-2xl text-nowrap md:py-3 md:rounded md:hover:bg-purple-600 md:transition-colors'>
        {LibIcon}
        <span className='hidden md:block'>Meus quizzes</span>
      </Link>
    </aside>
  );
}

export default memo(Sidebar);
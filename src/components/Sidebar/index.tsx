import { GoHomeFill } from 'react-icons/go';
import { FaPlus } from 'react-icons/fa6';
import { LuLibrary } from 'react-icons/lu';

function Sidebar() {
    return (
        <aside className='flex flex-col gap-8 p-6 bg-purple-900 w-64 text-neutral-100'>
            <h1 className='text-3xl'>Studier</h1>

            <button type='button' className='flex items-center gap-6 text-2xl'>
                <GoHomeFill/>
                Home
            </button>

            <button type='button' className='flex items-center gap-6 text-2xl'>
                <FaPlus/>
                Novo
            </button>

            <button type='button' className='flex items-center gap-6 text-2xl text-nowrap'>
                <LuLibrary/>
                Meus quizzes
            </button>
        </aside>
    );
}

export default Sidebar;
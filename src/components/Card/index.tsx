import IQuiz from 'types/IQuiz';

function Card({ name, questions, id }: IQuiz) {
    return (
        <div className='bg-slate-800 flex flex-col p-4 rounded gap-6 w-full'>
            <div>
                <h4 className='text-2xl'>{name}</h4>
                <p>{questions.length} pergunta</p>
            </div>

            <span className='p-2 text-center rounded bg-neutral-500 text-nowrap overflow-hidden'>
                {questions[0].title}
            </span>

            <button className='bg-green-600 p-2 rounded' type="button">Começar</button>
        </div>
    );
}

export default Card;
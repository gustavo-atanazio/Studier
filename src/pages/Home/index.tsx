import Card from 'components/Card';
import IQuiz from 'types/IQuiz';

const defaultQuizzes: IQuiz[] = [
    {
        name: 'Matemática',
        questions: [
            {
                title: 'Quanto é 2 + 2?',
                options: ['1', '2', '3', '4'],
                response: '4'
            }
        ],
        id: crypto.randomUUID()
    },
    {
        name: 'Ciências',
        questions: [
            {
                title: 'Quantos planetas tem no sistema solar?',
                options: ['10', '1000', '25', '8'],
                response: '8'
            }
        ],
        id: crypto.randomUUID()
    }
];

function Home() {
    return (
        <>
            <h2 className='text-4xl mb-6'>Padrão do sistema</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {defaultQuizzes.map(quiz => (
                    <Card {...quiz} key={quiz.id}/>
                ))}
            </div>
        </>
    );
}

export default Home;
import { useLocation } from 'react-router-dom';

import Grid from 'components/Grid';
import Card from 'components/Card';

import { useQuizzesContext } from 'context/Quizzes';
import IQuiz from 'types/IQuiz';

const defaultQuizzes: IQuiz[] = [
    {
        name: 'Matemática',
        questions: [
            {
                title: 'Quanto é 2 + 2?',
                options: ['1', '2', '3', '4'],
                response: '4',
                id: crypto.randomUUID()
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
                response: '8',
                id: crypto.randomUUID()
            }
        ],
        id: crypto.randomUUID()
    }
];

function Home() {
    const { pathname } = useLocation();
    const { quizzes } = useQuizzesContext();

    return (
        <>
            <h2 className='text-4xl mb-6'>Padrão do sistema</h2>

            <Grid>
                {defaultQuizzes.map(quiz => (
                    <Card {...quiz} path={pathname} key={quiz.id}/>
                ))}
            </Grid>

            <h2 className='text-4xl mb-6 mt-6'>Meus Quizzes</h2>

            {quizzes.length > 0
                ? (
                    <Grid>
                        {quizzes.map(quiz => (
                            <Card {...quiz} path={pathname} key={quiz.id}/>
                        ))}
                    </Grid>
                )

                : (
                    <p>Nenhum quiz ainda!</p>
                )
            }
        </>
    );
}

export default Home;
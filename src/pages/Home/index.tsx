import { useLocation } from 'react-router-dom';

import Grid from 'components/Grid';
import Card from 'components/Card';

import { useQuizzesContext } from 'context/Quizzes';
import defaultQuizzes from './defaultQuizzes';

function Home() {
    const { pathname } = useLocation();
    const { quizzes } = useQuizzesContext();

    return (
        <>
            <h2 className='text-4xl mb-6'>Padrão do sistema</h2>

            <Grid>
                {defaultQuizzes.map((quiz, index) => (
                    <Card
                        {...quiz}
                        renderDelay={index}
                        path={pathname}
                        key={quiz.id}
                    />
                ))}
            </Grid>

            <h2 className='text-4xl mb-6 mt-6'>Meus Quizzes</h2>

            {quizzes.length > 0
                ? (
                    <Grid>
                        {quizzes.map((quiz, index) => (
                            <Card
                                {...quiz}
                                renderDelay={index}
                                path={pathname}
                                key={quiz.id}
                            />
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
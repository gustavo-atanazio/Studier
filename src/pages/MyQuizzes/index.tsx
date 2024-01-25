import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Grid from 'components/Grid';
import Card from 'components/Card';
import { useQuizzesContext } from 'context/Quizzes';

function MyQuizzes() {
    const { pathname } = useLocation();
    const { quizzes } = useQuizzesContext();

    return (
        <>
            <h2 className='text-4xl mb-6'>Meus quizzes</h2>

            {quizzes.length > 0
                ? (
                    <Grid>
                        <AnimatePresence mode='popLayout'>
                            {quizzes.map((quiz, index) => (
                                <Card
                                    {...quiz}
                                    renderDelay={index}
                                    path={pathname}
                                    key={quiz.id}
                                />
                            ))}
                        </AnimatePresence>
                    </Grid>
                )

                : (
                    <p>Nenhum quiz ainda!</p>
                )
            }
        </>
    );
}

export default MyQuizzes;
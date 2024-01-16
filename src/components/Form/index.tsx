import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import Grid from 'components/Grid';
import FormCard from './FormCard';

import { useQuizzesContext } from 'context/Quizzes';
import IQuestion from 'types/IQuestion';

function Form() {
    const { createQuiz } = useQuizzesContext();

    const [name, setName] = useState('');
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const maxQuestions = 10;

    function addQuestion() {
        if (questions.length < maxQuestions) {
            setQuestions([
                ...questions,
                {
                    title: '',
                    options: ['', '', '', ''],
                    response: '',
                    id: crypto.randomUUID()
                }
            ]);
        }
    }

    function updateQuestionTitle(title: string, id: string) {
        setQuestions(prevState => {
            const updatedQuestions = prevState.map(question =>
                question.id === id ? { ...question, title } : question
            );

            return updatedQuestions;
        });
    }

    function updateOption(optionIndex: number, value: string, id: string) {
        setQuestions(prevState => {
            const updatedQuestions = prevState.map(question => 
                question.id === id ? {
                    ...question,
                    options: question.options.map((option, index) => 
                        index === optionIndex ? value : option
                    )
                } : question
            );

            return updatedQuestions;
        });
    }

    function updateResponse(response: string, id: string) {
        setQuestions(prevState => {
            const updatedQuestions = prevState.map(question => 
                question.id === id ? { ...question, response } : question    
            );

            return updatedQuestions;
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        createQuiz(name, questions);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='mb-6 w-full outline-0 py-2 px-4 text-neutral-600 rounded'
                placeholder='Nome do quiz'
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <Grid>
                {questions.map(question => (
                    <FormCard
                        {...question}

                        onTitleChange={title => updateQuestionTitle(title, question.id)}
                        onOptionChange={(optionIndex, value) => updateOption(optionIndex, value, question.id)}
                        onResponseChange={response => updateResponse(response, question.id)}
                        
                        key={question.id}
                    />
                ))}

                {questions.length < maxQuestions &&
                    <button
                        onClick={addQuestion}
                        className='flex flex-col items-center justify-center gap-2 bg-neutral-500 p-2 border-2 border-dashed border-neutral-400 rounded'
                        type='button'
                    >
                        <FaPlus size={25}/>
                        Nova pergunta
                    </button>
                }
            </Grid>

            <button type='submit'>Criar</button>
        </form>
    );
}

export default Form;
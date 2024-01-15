import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import Grid from 'components/Grid';
import FormCard from './FormCard';

import IQuestion from 'types/IQuestion';

function Form() {
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

    return (
        <form>
            <input type='text' className='mb-6 w-full' placeholder='Nome do quiz'/>

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
                        className='flex flex-col items-center bg-neutral-500 p-2 border-2 border-dashed border-neutral-400 rounded'
                        type='button'
                    >
                        <FaPlus size={25}/>
                        Nova pergunta
                    </button>
                }
            </Grid>
        </form>
    );
}

export default Form;
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa6';

import Grid from 'components/Grid';
import FormCard from './FormCard';

import { useQuizzesContext } from 'context/Quizzes';
import IQuestion from 'types/IQuestion';

export interface FormValues {
    name: string;
    questions: IQuestion[];
}

function Form({ quizID }: { quizID?: string }) {
    const { quizzes, editQuiz, createQuiz } = useQuizzesContext();
    const maxQuestions = 10;

    const { register, handleSubmit, control, setValue } = useForm<FormValues>({
        defaultValues: {
            name: '',
            questions: []
        }
    });

    const { fields, append } = useFieldArray({
        control,
        name: 'questions'
    });

    function addQuestion() {
        if (fields.length < maxQuestions) {
            append({
                title: '',
                options: ['', '', '', ''],
                response: ''
            });
        }
    }

    function onSubmit(data: FormValues) {
        if (quizID) {
            editQuiz({ ...data, id: quizID });
            toast.success('Quiz editado com sucesso!');
        } else {
            createQuiz(data.name, data.questions);
            toast.success('Quiz criado com sucesso!');
        }
    }

    useEffect(() => {
        if (quizID) {
            const quiz = quizzes.find(quiz => quiz.id === quizID);

            if (quiz) {
                setValue('name', quiz.name);
                setValue('questions', quiz.questions);
            }
        }
    }, []);

    return (
        <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                className='w-full outline-0 py-2 px-4 text-neutral-600 rounded'
                placeholder='Nome do quiz'
                {...register('name')}
            />

            <Grid>
                {fields.map((question, index) => (
                    <FormCard
                        options={question.options}
                        id={index}
                        register={register}
                        key={index}
                    />
                ))}

                {fields.length < maxQuestions &&
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

            <button className='w-full max-w-96 self-center bg-purple-800 py-2 rounded text-2xl' type='submit'>
                {quizID ? 'Editar' : 'Criar'}
            </button>
        </form>
    );
}

export default Form;
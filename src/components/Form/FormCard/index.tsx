import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../index';

interface Props {
    options: string[];
    id: number;
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
}

function FormCard({ options, id, register, errors }: Props) {
    return (
        <div className='flex flex-col gap-4 p-2 bg-neutral-500 rounded text-neutral-900'>
            <input
                className={`
                    w-full outline-0 py-1 px-2 rounded-sm
                    ${errors.questions && errors.questions[id]?.title &&
                        'outline outline-2 outline-red-600 placeholder:text-red-600'}
                `}
                type='text'
                placeholder='Título'
                {...register(`questions.${id}.title`, { required: true })}
            />

            <div className='flex flex-col gap-2'>
                {options.map((option, index) => (
                    <input
                        className={`
                            w-full outline-0 py-1 px-2 rounded-sm
                            ${errors.questions && errors.questions[id]?.options && errors.questions[id]?.options![index] &&
                                'outline outline-2 outline-red-600 placeholder:text-red-600'}
                        `}
                        type='text'
                        placeholder={`Opção ${index + 1}`}
                        {...register(`questions.${id}.options.${index}`, { required: true })}
                        key={index}
                    />
                ))}
            </div>

            <input
                className={`
                    w-full outline-0 py-1 px-2 rounded-sm
                    ${errors.questions && errors.questions[id]?.response &&
                        'outline outline-2 outline-red-600 placeholder:text-red-600'}
                `}
                type='text'
                placeholder='Resposta'
                {...register(`questions.${id}.response`, { required: true })}
            />
        </div>
    );
}

export default FormCard;
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../index';

interface Props {
    options: string[];
    id: number;
    register: UseFormRegister<FormValues>;
}

function FormCard({ options, id, register }: Props) {
    return (
        <div className='flex flex-col gap-4 p-2 bg-neutral-500 rounded text-neutral-900'>
            <input
                className='w-full outline-0 py-1 px-2 rounded-sm'
                type='text'
                placeholder='Título'
                {...register(`questions.${id}.title`)}
            />

            <div className='flex flex-col gap-2'>
                {options.map((option, index) => (
                    <input
                        className='w-full outline-0 py-1 px-2 rounded-sm'
                        type='text'
                        placeholder={`Opção ${index + 1}`}
                        {...register(`questions.${id}.options.${index}`)}
                        key={index}
                    />
                ))}
            </div>

            <input
                className='w-full outline-0 py-1 px-2 rounded-sm'
                type='text'
                placeholder='Resposta'
                {...register(`questions.${id}.response`)}
            />
        </div>
    );
}

export default FormCard;
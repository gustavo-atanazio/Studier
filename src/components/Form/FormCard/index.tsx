import IQuestion from 'types/IQuestion';

interface Props extends IQuestion {
    onTitleChange: (title: string) => void;
    onOptionChange: (index: number, value: string) => void;
    onResponseChange: (response: string) => void;
}

function FormCard({ title, options, response, onTitleChange, onOptionChange, onResponseChange }: Props) {
    return (
        <div className='flex flex-col gap-4 p-2 bg-neutral-500 rounded text-neutral-900'>
            <input
                className='w-full outline-0'
                type='text'
                placeholder='Título'
                value={title}
                onChange={event => onTitleChange(event.target.value)}
            />

            <div className='flex flex-col gap-2'>
                {options.map((option, index) => (
                    <input
                        className='w-full outline-0'
                        type='text'
                        placeholder={`Opção ${index + 1}`}
                        value={option}
                        onChange={event => onOptionChange(index, event.target.value)}
                        key={index}
                    />
                ))}
            </div>

            <input
                className='w-full outline-0'
                type='text'
                placeholder='Resposta'
                value={response}
                onChange={event => onResponseChange(event.target.value)}
            />
        </div>
    );
}

export default FormCard;
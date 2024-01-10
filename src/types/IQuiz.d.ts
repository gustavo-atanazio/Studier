import IQuestion from './IQuestion';

interface IQuiz {
    name: string;
    questions: IQuestion[];
    id: string
}

export default IQuiz;
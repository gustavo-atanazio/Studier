import IQuiz from 'types/IQuiz';

const defaultQuizzes: IQuiz[] = [
    {
        name: 'Ciências',
        questions: [
            {
                title: 'Qual metal fica líquido na temperatura ambiente?',
                options: ['Mercúrio', 'Chumbo', 'Ferro', 'Gálio'],
                response: 'Mercúrio'
            },
            {
                title: 'Qual é o maior osso do corpo humano?',
                options: ['Fêmur', 'Tíbia', 'Fíbula', 'Rádio'],
                response: 'Fêmur'
            },
            {
                title: 'Qual é a estrutura celular responsável pela produção de energia nas células?',
                options: ['Mitocôndria', 'Cloroplasto', 'Núcleo', 'Retículo Endoplasmático'],
                response: 'Mitocôndria'
            },
            {
                title: 'Qual é o único planeta do nosso sistema solar que gira no sentido horário?',
                options: ['Vênus', 'Marte', 'Urano', 'Netuno'],
                response: 'Vênus'
            },
            {
                title: 'Qual é a fórmula química da água?',
                options: ['CO2', 'H2O', 'O2', 'CH4'],
                response: 'H2O'
            },
            {
                title: 'Qual é a maior camada da atmosfera terrestre?',
                options: ['Troposfera', 'Exosfera', 'Mesosfera', 'Termosfera'],
                response: 'Exosfera'
            },
            {
                title: 'Qual é o elemento mais radioativo na natureza?',
                options: ['Rádio', 'Césio', 'Urânio', 'Polônio'],
                response: 'Polônio'
            },
            {
                title: 'Qual é o processo pelo qual o sol gera energia?',
                options: ['Fusão nuclear', 'Fissão nuclear', 'Combustão', 'Radioatividade'],
                response: 'Fusão nuclear'
            },
            {
                title: 'Quem descobriu o elétron?',
                options: ['Ernest Rutherford', 'J.J. Thomson', 'Niels Bohr', 'Marie Curie'],
                response: 'J.J. Thomson'
            },
            {
                title: 'Qual é o ácido presente no estômago humano?',
                options: ['Ácido acético', 'Ácido sulfúrico', 'Ácido clorídrico', 'Ácido cítrico'],
                response: ''
            }
        ],
        id: crypto.randomUUID()
    },
    {
        name: 'Geografia',
        questions: [
            {
                title: 'Qual é a cordilheira mais longa do mundo?',
                options: ['Himalaias', 'Andes', 'Alpes', 'Montanhas Rochosas'],
                response: 'Andes'
            },
            {
                title: 'Qual é o menor oceano do mundo?',
                options: ['Oceano Atlântico', 'Oceano Pacífico', 'Oceano Índico', 'Oceano Ártico'],
                response: 'Oceano Ártico'
            },
            {
                title: 'Qual é a capital da Nova Zelândia?',
                options: ['Auckland', 'Wellington', 'Christchurch', 'Queenstown'],
                response: 'Wellington'
            },
            {
                title: 'Qual é o maior arquipélago do mundo?',
                options: ['Filipinas', 'Havaí', 'Japão', 'Indonésia'],
                response: 'Indonésia'
            },
            {
                title: 'Em que oceano fica a Ilha da Páscoa?',
                options: ['Oceano Atlântico', 'Oceano Pacífico', 'Oceano Índico', 'Oceano Ártico'],
                response: 'Oceano Pacífico'
            },
            {
                title: 'Que país é conhecido como "A Terra dos Incas"?',
                options: ['Peru', 'México', 'Bolívia', 'Equador'],
                response: 'Peru'
            },
            {
                title: 'Qual é a cidade mais populosa do mundo?',
                options: ['Tóquio', 'Xangai', 'Pequim', 'Delhi'],
                response: 'Tóquio'
            },
            {
                title: 'Em que continente fica o Cabo da Boa Esperança?',
                options: ['África', 'Europa', 'Ásia', 'Oceania'],
                response: 'África'
            },
            {
                title: 'Em que país fica o Deserto do Atacama?',
                options: ['Chile', 'Argentina', 'Peru', 'Brasil'],
                response: 'Chile'
            },
            {
                title: 'Qual é a fronteira natural entre a Europa e a Ásia?',
                options: ['Rio Danúbio', 'Rio Volga', 'Cáucaso', 'Montanhas Urais'],
                response: 'Montanhas Urais'
            }
        ],
        id: crypto.randomUUID()
    }
];

export default defaultQuizzes;
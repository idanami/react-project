import { v4 as uuidv4 } from 'uuid';

const AGE_OPTION = [
    {
        id: uuidv4(),
        text: '< 18',
        value: 'LESS THAN 18',
    },
    {
        id: uuidv4(),
        text: '19-24',
        value: 'BETWEEN 19 & 24',
    },
    {
        id: uuidv4(),
        text: '25-34',
        value: 'BETWEEN 25 & 34',
    },
    {
        id: uuidv4(),
        text: '35-49',
        value: 'BETWEEN 35 & 49',
    },
    {
        id: uuidv4(),
        text: '50-64',
        value: 'BETWEEN 50 & 64',
    },
    {
        id: uuidv4(),
        text: '65 >',
        value: 'GREATER THAN 65',
    },
];

export default AGE_OPTION;

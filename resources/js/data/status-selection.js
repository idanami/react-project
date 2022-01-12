import { v4 as uuidv4 } from 'uuid';

const STATUS_SELECTION = [
    {
        id: uuidv4(),
        text: "I'm married",
        value: 'MARRIED',
    },
    {
        id: uuidv4(),
        text: "I'm currently insured",
        value: 'INSURED',
    },
    {
        id: uuidv4(),
        text: 'I own multiple vehicles',
        value: 'MULTIPLE_VEHICLES',
    },
    {
        id: uuidv4(),
        text: 'I own a home',
        value: 'HOME',
    },
];

export default STATUS_SELECTION;

export type gameMode = 'edit' | 'match';

export type cardType = 'main' | 'plus' | 'minus';

export type card = {
    id: string;
    type: cardType;
    value: number;
};

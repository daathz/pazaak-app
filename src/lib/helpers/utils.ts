export function shuffle(): number {
    return 0.5 - Math.random();
}

export function randomBoolean(): boolean {
    return Math.round(Math.random()) === 1;
}

export function createMainDeck(): number[] {
    return Array.from(
        { length: 40 },
        (item, index) => (item = (index % 10) + 1)
    );
}

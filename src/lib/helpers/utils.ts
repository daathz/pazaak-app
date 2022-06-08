export function shuffle(): number {
    return 0.5 - Math.random();
}

export function randomBoolean(): boolean {
    return Math.round(Math.random()) === 1;
}
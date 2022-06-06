import type { card } from './types';
import { writable } from 'svelte/store';

const stored: string = localStorage.deck;

const initialValue: card[] = stored ? JSON.parse(stored) : [];

const cards = writable(initialValue);

cards.subscribe((items) => (localStorage.deck = JSON.stringify(items)));

export default {
    subscribe: cards.subscribe,
    addCard: (card: card) => {
        cards.update((items) => {
            if (items.length < 10) {
                items.push(card);
            }
            return items;
        });
    },
    removeCard: (id: string) => {
        cards.update((items) => {
            return items.filter((item) => item.id !== id);
        });
    },
};

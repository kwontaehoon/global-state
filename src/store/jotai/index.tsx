import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// read + Write
export const countAtom = atom(10)

// readOnly
export const doubleCountAtom = atom((get) => get(countAtom) * 2)

// writeOnly
export const incrementAtom = atom(null, (get, set, update) => {
    set(countAtom, get(countAtom) + 1)
})

// stroage
export const darkModeAtom = atomWithStorage('darkMode', false)
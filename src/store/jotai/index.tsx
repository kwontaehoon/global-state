import { atom } from 'jotai';
import { atomWithStorage, useHydrateAtoms, loadable, atomWithObservable, atomWithLazy } from 'jotai/utils';
import { interval, map, Observable } from 'rxjs';

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

// SSR hydrateAtom
export const hydrateAtom = atom(0)

// async atom
export const asyncAtom = atom(async (get) => await fetch('http://localhost:8080/api/test2?page=0', {
    cache: 'no-store'
}))

// async loadable
export const loadableAtom = loadable(asyncAtom)

// atomWithObservable
const counterSubject = interval(1000).pipe(map((i) => `#${i}`))
export const counterAtom = atomWithObservable(() => counterSubject, {
    initialValue: '#20'
})

// atomLazy
export const lazyAtom = atomWithLazy(async() => {
    const response = await fetch('http://localhost:8080/api/test2?page=1', {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
})
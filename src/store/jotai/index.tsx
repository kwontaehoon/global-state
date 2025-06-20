import { atom } from 'jotai';
import { atomWithStorage, useHydrateAtoms, loadable, atomWithObservable, atomWithLazy, atomWithReset, RESET, atomWithDefault, atomWithRefresh, atomFamily } from 'jotai/utils';
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

// atomWithLazy
export const lazyAtom = atomWithLazy(async() => {
    const response = await fetch('http://localhost:8080/api/test2?page=1', {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
})

// atomWithReset
export const dollarsAtom = atomWithReset(0)
export const centsAtom = atom(
  (get) => get(dollarsAtom) * 100,
  (get, set, newValue: number | typeof RESET) => {
    return set(dollarsAtom, newValue === RESET ? newValue : newValue / 100)
  }
)

// atomWithDefault
export const count1Atom = atom(1)
export const count2Atom = atomWithDefault((get) => get(count1Atom) * 2)

// atomWithRefresh
export const postsAtom = atomWithRefresh((get) =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()),
)

// atomFmily
export const todoAtomFamily = atomFamily((id: number) =>
    atom(`Todo item ${id}`) // id별로 다른 atom 생성
)
  
import { atom } from 'jotai';
import { atomWithStorage, useHydrateAtoms, loadable, atomWithObservable, atomWithLazy, atomWithReset, RESET, atomWithDefault, atomWithRefresh, atomFamily, atomWithReducer, selectAtom, splitAtom } from 'jotai/utils';
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

// atomCallback
export const callbackCountAtom = atom(0)
export const callbackDataAtom = atom(0)

// atomWithReducer
type CountAction = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set'; payload: number }

const countReducer = (prev: number, action: CountAction): number => {
  switch (action.type) {
    case 'increment':
      return prev + 1
    case 'decrement':
      return prev - 1
    case 'reset':
      return 0
    case 'set':
      return action.payload
    default:
      return prev
  }
}

export const reducerAtom = atomWithReducer(0, countReducer)

const defaultPerson = {
    name: {
      first: 'Jane',
      last: 'Doe',
    },
    birth: {
      year: 2000,
      month: 'Jan',
      day: 1,
      time: {
        hour: 1,
        minute: 1,
      },
    },
  }

// selectAtom
export const personAtom = atom(defaultPerson)
export const nameAtom = selectAtom(personAtom, (person) => person.name)
export const birthAtom = selectAtom(personAtom, (person) => person.birth)

// splitAtom
export const todosAtom = atom([
    { id: 1, text: '코딩하기', done: false},
    { id: 2, text: '운동하기', done: true }
])

export const todoAtomsAtom = splitAtom(todosAtom)
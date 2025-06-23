import { produce } from 'immer';
import { create, StateCreator, StoreApi, UseBoundStore } from 'zustand'

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

type State = {
  firstName: string
  lastName: string
}

type StateDeep = {
  state: number
  deep: {
    nested: {
      obj: { count: number }
    }
  },
  normalInc: () => void
  immerInc: () => void
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}

type Selectors = {
  count: number
  increase: () => void
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

type NotStore = {
  count: number,
  text: string
}
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

export const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))

export const useDeepStore = create<StateDeep>((set) => ({
  state: 0,
  deep: {
    nested: {
      obj: {
        count: 123
      }
    }
  },
  normalInc: () =>
    set((state) => ({
      deep: {
        ...state.deep,
        nested: {
          ...state.deep.nested,
          obj: {
            ...state.deep.nested.obj,
            count: state.deep.nested.obj.count + 1
          }
        }
      }
    })),
    immerInc: () =>
      set(produce((state: StateDeep) => { ++state.deep.nested.obj.count })),
}))

// createSelectors
const countStore: StateCreator<Selectors> = (set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
})


export const useSelectorsStore = createSelectors(create(countStore))


// store 사용 x
export const useBoundStore = create(() => ({
  count: 0,
  text: 'hello'
}))

export const inc = () => useBoundStore.setState((state) => ({ count: state.count + 1 }))
export const setText = (text: string) => useBoundStore.setState({ text })
'use client'

import { Provider, createStore } from 'jotai'
import 'jotai-devtools/styles.css'
import { DevTools, useAtomsDebugValue } from 'jotai-devtools'

const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}

export default function JotaiProvider({ children }: { children: React.ReactNode }) {
    return (
      <Provider>
        <DevTools />
        <DebugAtoms />
        {children}
      </Provider>
    )
  }
  

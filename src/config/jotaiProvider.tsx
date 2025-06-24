'use client'

import { Provider, createStore } from 'jotai'
import 'jotai-devtools/styles.css'
import { useAtomsDebugValue } from 'jotai-devtools'
import type { ComponentType } from "react"
import type { DevToolsProps } from "jotai-devtools"
import dynamic from 'next/dynamic'

let DevTools: ComponentType<DevToolsProps> | null = null;

if (process.env.NODE_ENV !== "production") {
  DevTools = dynamic(
    () => import("./devtools").then((mod) => ({ default: mod.DevTools })),
    { ssr: false }
  );
}

const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}

export default function JotaiProvider({ children }: { children: React.ReactNode }) {
    return (
      <Provider>
        {DevTools && <DevTools />}
        <DebugAtoms />
        {children}
      </Provider>
    )
}
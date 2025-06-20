'use client'

import React from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { countAtom, darkModeAtom, doubleCountAtom, incrementAtom, hydrateAtom } from '@/store/jotai'
import ReadOnlyFunc from './ReadOnly'
import WriteOnlyFunc from './WriteOnly'
import { atomWithStorage, RESET, useHydrateAtoms } from 'jotai/utils'
import Storage from './storage'
import Loadable from './loadable'
import Observable from './observable'
import Lazy from './lazy'
import Reset from './reset'
import WithDefault from './withDefault'
import Refresh from './refresh'
import Family from './family'

type PageProps = {
  data: number
}

const Page = ({data}: PageProps) => {

  console.log("rendering", data)

  // useHydrateAtoms([
  //   [hydrateAtom, data],
  // ]);

  const [count, setCount] = useAtom(countAtom)
  const [double] = useAtom(doubleCountAtom)
  const increment = useSetAtom(incrementAtom)

  // SSR hydrate
  // const [hydrate, setHydrate] = useAtom(hydrateAtom)

  
  return (
    <div className='flex-1 border p-2'>
      <div>count: {count}</div>
      <div>double: {double}</div>
      <button className='border rounded px-2 py-1 bg-gray-300 font-bold' onClick={increment}>count 버튼</button>
      {/* <ReadOnlyFunc /> */}
      {/* <WriteOnlyFunc /> */}
      {/* <Storage /> */}
      {/* <Loadable /> */}
      {/* <Observable /> */}
      {/* <Lazy /> */}
      {/* <Reset /> */}
      {/* <WithDefault /> */}
      {/* <Refresh /> */}
      <Family />
    </div>
  )
}

export default Page
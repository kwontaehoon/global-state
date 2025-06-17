'use client'

import React from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { countAtom, darkModeAtom, doubleCountAtom, incrementAtom } from '@/store/jotai'
import ReadOnlyFunc from './ReadOnly'
import WriteOnlyFunc from './WriteOnly'
import { atomWithStorage, RESET } from 'jotai/utils'

const page = () => {

  console.log("rendering")

  // const [count, setCount] = useAtom(countAtom)
  // const useAtomValueCount = useAtomValue(countAtom)
  // const [double] = useAtom(doubleCountAtom)
  // const increment = useSetAtom(incrementAtom)

  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  
  return (
    <div className='flex-1 border p-2'>
      {/* <div>count: {count}</div>
      <div>useAtomValue count: {useAtomValueCount}</div>
      <div>double: {double}</div>
      <button onClick={increment}>버튼</button> */}
      <ReadOnlyFunc />
      <WriteOnlyFunc />
      <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
      <button onClick={() => setDarkMode(RESET)}>Reset (to 'hello')</button>
    </div>
  )
}

export default page
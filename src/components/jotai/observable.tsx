import { useAtom } from 'jotai'
import React from 'react'
import { counterAtom } from '@/store/jotai/'

const observable = () => {

    const [counter] = useAtom(counterAtom)

  return (
    <div>counter: {counter}</div>
  )
}

export default observable
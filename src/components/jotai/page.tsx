'use client'

import React from 'react'
import { useAtom } from 'jotai'
import { counter } from '@/store/jotai'

const page = () => {

  const [count, setCount] = useAtom(counter)

  return (
    <div className='flex-1 border p-2'>
      <h2>jotai</h2>
      <div>{count}</div>
    </div>
  )
}

export default page
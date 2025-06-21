import { callbackCountAtom, callbackDataAtom, countAtom } from '@/store/jotai'
import { atom, useAtom } from 'jotai'
import { useAtomCallback } from 'jotai/utils'
import React, { useCallback, useState } from 'react'

const callback = () => {


    const [count, setCount] = useAtom(callbackCountAtom)
    const [data, setData] = useAtom(callbackDataAtom)

    console.log("count: ", count)
    console.log("data: ", data)

    
    const increment = useAtomCallback(
        useCallback(async (get, set) => {
          const current = get(callbackCountAtom)
          const res = await fetch('http://localhost:8080/api/test2?page=1')
          const data = await res.json()
          set(callbackDataAtom, data)
          set(callbackCountAtom, current + 1)
        }, [])
    )

    const test = async() => {
        const res = await fetch('http://localhost:8080/api/test2?page=1')
        const data = await res.json()
        setData(data)
        setCount((prev) => prev + 1)
    }

  return (
    <div>
        <div>Callback</div>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>test()}>test</button>
    </div>
  )
}

export default callback
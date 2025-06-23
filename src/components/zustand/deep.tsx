import { useDeepStore, useSelectorsStore } from '@/store/zustand'
import React from 'react'

const deep = () => {

    const deep = useDeepStore((state) => state.deep.nested.obj.count)
    const setSpreadDeep = useDeepStore((state) => state.normalInc)
    const setImmerDeep = useDeepStore((state) => state.immerInc)

  return (
    <div>
        <div>{deep}</div>
        <button onClick={setSpreadDeep}>spread 버튼</button>
        <button onClick={setImmerDeep}>immer 버튼</button>
    </div>
  )
}

export default deep
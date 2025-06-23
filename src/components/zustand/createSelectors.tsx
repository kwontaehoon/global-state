import { useSelectorsStore } from '@/store/zustand'
import React from 'react'

const createSelectors = () => {

    const count = useSelectorsStore.use.count()
    const increase = useSelectorsStore.use.increase()

  return (
    <div>
        <div>{count}</div>
        <button onClick={increase}>버튼</button>
    </div>
  )
}

export default createSelectors
import { reducerAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const reducer = () => {

    const [count, dispatch] = useAtom(reducerAtom)

  return (
     <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default reducer
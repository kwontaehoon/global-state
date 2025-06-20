import React from 'react'
import { count1Atom, count2Atom } from '@/store/jotai'
import { useAtom } from 'jotai'
import { RESET, useResetAtom } from 'jotai/utils'

const withDefault = () => {

  const [count1, setCount1] = useAtom(count1Atom)
  const [count2, setCount2] = useAtom(count2Atom)
  const resetCount2 = useResetAtom(count2Atom)

  return (
    <div>
      <div>withDefault</div>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>

      <button
        onClick={() => setCount1((c) => c + 1)}
      >
        increment count1
      </button>
      <button
        onClick={() => setCount2((c) => c + 1)}
      >
        increment count2
      </button>
      <button
        onClick={() => resetCount2()}
      >
          Reset with useResetAtom
      </button>
      <button 
        onClick={() => setCount2(RESET)}
      >
          Reset with RESET const
      </button>
    </div>
  )
}

export default withDefault
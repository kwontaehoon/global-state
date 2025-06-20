import React from 'react'
import { atom, useAtom, useSetAtom } from 'jotai'
import { atomWithReset, useResetAtom, RESET } from 'jotai/utils'
import { centsAtom, dollarsAtom } from '@/store/jotai'

export default function ResetExample() {
  const [dollars, setDollars] = useAtom(dollarsAtom)
  const [cents] = useAtom(centsAtom)
  const resetCents = useResetAtom(centsAtom)

  return (
    <>
      <div>dollars: {dollars}</div>
      <div>cents: {cents}</div>

      <button
        onClick={() => setDollars(dollars + 1)}
      >
        +1 dollar
      </button>

      <button
        onClick={() => resetCents()}
      >
        Reset cents
      </button>
    </>
  )
}

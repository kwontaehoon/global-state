import { lenAtom, textAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const TextBox = () => {

  const [text, setText] = useAtom(textAtom)
  const [len] = useAtom(lenAtom)

  return (
    <span>
      <input value={text} onChange={(e) => setText(e.target.value)} />({len})
    </span>
  )
}

export default TextBox
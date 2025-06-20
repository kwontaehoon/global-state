import { todoAtomFamily } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const family = () => {

  const [text, setText] = useAtom(todoAtomFamily(12))

  const TodoItem = ({ id }: { id: number }) => {
    const [text, setText] = useAtom(todoAtomFamily(id))
  
    return (
      <div className='mb-2'>
        <input
          className='border px-2 py-1'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    )
}
  return (
    <div>
        {[1, 2, 3].map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  )
}

export default family
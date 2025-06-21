import { todoAtomsAtom } from '@/store/jotai'
import { useAtom, PrimitiveAtom } from 'jotai'
import React, { useState } from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

const split = () => {

    const [state, setState] = useState([
        { id: 1, text: '코딩하기', done: false},
        { id: 2, text: '운동하기', done: true }
    ])

    const [todo] = useAtom(todoAtomsAtom)

    function TodoItem({ atom }: { atom: PrimitiveAtom<Todo> }) {
        const [todo, setTodo] = useAtom(atom)
      
        return (
          <li>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() =>
                  setTodo({ ...todo, done: !todo.done })
                }
              />
              {todo.text}
            </label>
          </li>
        )
      }

      
  return (
    <div>
        <ul>
        {todo.map((todoAtom, index) => (
            <TodoItem key={index} atom={todoAtom} />
        ))}
        </ul>
        {state.map((x, i) => (
      <div
        key={x.id}
        onClick={() =>
          setState(prev =>
            prev.map((item, index) =>
              index === i
                ? { ...item, done: !item.done }
                : item
            )
          )
        }
      >
        {x.text} {x.done ? '✅' : '❌'}
      </div>
    ))}
    </div>
  )
}

export default split
import { inc, setText, useBoundStore } from '@/store/zustand'
import React from 'react'

const notStore = () => {

    const count = useBoundStore((state) => state.count)
    const text = useBoundStore((state) => state.text)

    const setCount = inc
    const setString = setText

  return (
    <div>
        <div>count: {count}</div>
        <div>text: {text}</div>
        <button onClick={setCount}>count 올리기</button>
        <button onClick={() => setString('zz')}>text 바꾸기</button>
    </div>
  )
}

export default notStore
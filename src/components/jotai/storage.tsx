import { darkModeAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import React from 'react'

const storage = () => {

  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  return (
    <div>
        <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
        <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
        <br />
        <button onClick={() => setDarkMode(RESET)}>Reset (to 'hello')</button>
    </div>
  )
}

export default storage
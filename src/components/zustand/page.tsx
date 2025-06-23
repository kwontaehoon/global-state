'use client'

import { useStore } from '@/store/zustand'
import React from 'react'
import Update from './update'
import Deep from './deep'
import CreateSelectors from './createSelectors'
import NotStore from './notStore'

type PageProps = {
  data: number
}

const page = ({ data }:PageProps) => {

  console.log("zustand start: ", data)

  const bears = useStore((state) => state.bears)
  const setIncreae = useStore((state) => state.increasePopulation)

  return (
    <div className='flex-1 border p-2'>
      <div>zustand</div>
      <div>{bears}</div>
      <button onClick={setIncreae}>버튼</button>
      <Update />
      <Deep />
      <CreateSelectors />
      <NotStore />
    </div>
  )
}

export default page
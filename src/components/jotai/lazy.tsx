import { lazyAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const lazy = () => {

    const [lazyValue, setLazyValue] = useAtom(lazyAtom)
  return (
    <div>lazy</div>
  )
}

export default lazy
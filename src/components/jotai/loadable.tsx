import { loadableAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const loadable = () => {

  const [loadableValue] = useAtom(loadableAtom)

  if(loadableValue.state === "hasError") return <div>error</div>
  else if(loadableValue.state === "loading") return <div>loading</div>
  else
  return (
    <div>loadable</div>
  )
}

export default loadable
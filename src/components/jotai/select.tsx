import { birthAtom, nameAtom, personAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const select = () => {

    const [person, setPerson] = useAtom(personAtom)
    const [name, setName] = useAtom(nameAtom)
    const [birth, setBirth] = useAtom(birthAtom)

    console.log("person: ", person)
    console.log("name: ", name)
    console.log("birth: ", birth)

  return (
    <div>select</div>
  )
}

export default select
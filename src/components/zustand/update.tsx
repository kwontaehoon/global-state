import { usePersonStore } from '@/store/zustand'
import React from 'react'

const update = () => {

  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)

  return (
    <div>
        <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </div>
  )
}

export default update
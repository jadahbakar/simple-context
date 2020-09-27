import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState('testing')
  const content = (
    <>
      <UserContext.Provider
        value={{ user, setUser }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  )
  return content
}

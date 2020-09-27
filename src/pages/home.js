import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Home = () => {
  const context = useContext(UserContext)
  const content = (
    <>
      <h2>Home</h2>
      <div>{context.user} </div>
      <button onClick={() => context.setUser('kiriman')}>change value</button>
    </>
  )
  return content
}

export default Home

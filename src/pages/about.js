import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const About = () => {
  const context = useContext(UserContext)
  const content = (
    <>
      <h2>About</h2>
      <div> {context.user} </div>
    </>
  )
  return content
}

export default About

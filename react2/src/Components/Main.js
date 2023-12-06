import React from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'

const Main = ({isLoggedin}) => {
  return (
    <div className='App'>
      {isLoggedin?<Logged />:
      <NotLogged />}
    </div>
  )
}

export default Main

import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'

function App() {

  return (
    <>
      <main>
        <Nav />
        <Dock />
        <MacWindow>
          <h2 style={{padding: '1rem'}}>Work in Progress..!!</h2>
          <h5><p style={{paddingLeft: '8rem'}}>-Shreyash Shetty</p></h5>
        </MacWindow>
      </main>
    </>
  )
}

export default App

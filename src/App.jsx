import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import BootScreen from './components/windows/BootScreen'

function App() {

  return (
    <>
      <main>
        <BootScreen onFinish={() => console.log("Boot screen finished")} />
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

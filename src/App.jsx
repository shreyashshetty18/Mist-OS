import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import MacWindow from './components/windows/MacWindow'
import BootScreen from './components/windows/BootScreen'
import Note from './components/windows/Note'
import PdfWindow from './components/windows/PdfWindow'

function App() {
  const [windowsState, setWindowsState] = useState({ github: false, note: false, pdf: false })
  const [topZIndex, setTopZIndex] = useState(1)
  const [minimizedWindows, setMinimizedWindows] = useState({})

  const windowProps = {
    setWindowsState,
    topZIndex,
    setTopZIndex,
    minimizedWindows,
    setMinimizedWindows
  }

  const handleDockClick = (iconName) => {
    if (iconName === 'github') {
      setWindowsState(state => ({ ...state, github: true }))
    } else if (iconName === 'note') {
      setWindowsState(state => ({ ...state, note: true }))
    } else if (iconName === 'pdf') {
      setWindowsState(state => ({ ...state, pdf: true }))
    }
  }

  return (
    <>
      <main>
        <BootScreen onFinish={() => console.log("Boot screen finished")} />
        <Nav />
        <Dock onIconClick={handleDockClick} />
        {windowsState.github && <GitHub windowName="github" windowProps={windowProps} />}
        {windowsState.note && <Note windowName="note" windowProps={windowProps} />}
        {windowsState.pdf && <PdfWindow windowName="pdf" windowProps={windowProps} />}
        <MacWindow windowProps={windowProps}>
          <h2 style={{padding: '1rem'}}>Work in Progress..!!</h2>
          <h5><p style={{paddingLeft: '8rem'}}>-Shreyash Shetty</p></h5>
        </MacWindow>
      </main>
    </>
  )
}
export default App

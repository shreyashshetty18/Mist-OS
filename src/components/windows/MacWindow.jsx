import { Rnd } from 'react-rnd'
import './windows.scss'

const MacWindow = () => {
  return (
    <Rnd>
        <div className="window">
          <div className="nav">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
          </div>
          <div className="main-content"></div>
        </div>
    </Rnd>
  )
}

export default MacWindow
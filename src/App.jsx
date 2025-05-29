import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import { useAppContext } from './AppContext'

function App() {
  const {
    clicks,
    seconds,
    showResults,
    Counter
  } = useAppContext();


  return (
    <div className="mainApp">
      <div className="Header">
        <h1>Click Speed Test</h1>
      </div>
      
      <div className="Clicker-Statss">
        <div className="counter">
          <div>
            <p className="counter-numberr">{clicks}</p>
          </div>
            <p>Score</p>
        </div>

        <div className="counter">
          <div>
            <p className="counter-numberr">{seconds.toFixed(2)}</p>
          </div>
            <p>Timer</p>
        </div>

        <div className="counter">
          <div>
            <p className="counter-numberr">{seconds > 0 ? (clicks / seconds).toFixed(1): 0}</p>
          </div>
            <p>Click/s</p>
        </div>
      </div>



        <div>
          <div className="clickBox" onMouseDown={Counter}><p><i>click here!</i></p></div>
        </div>
        
      
    </div>
  )
}

export default App

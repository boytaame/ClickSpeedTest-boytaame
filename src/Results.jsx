import './Results.css'
import { useAppContext } from './AppContext'

function Results(props) {

   const {showResults, setShowResults, seconds, clicks, setClicks, setSeconds} = useAppContext();
   
   function clickHandler() {
      setShowResults(prev => !prev);
      setSeconds(0);
      setClicks(0);
   }

   return (
      <>
         <h1>Your Results</h1>
         <div className="Clicker-Stats">
            <div className="counter-r">
               <div>
                  <p className="counter-number">{clicks}</p>
               </div>
                  <p className="caller">Score</p>
            </div>

            <div className="counter-r2">
               <div>
                  <p className="counter-number">{seconds}</p>
               </div>
                  <p className="caller">Timer</p>
            </div>

            <div className="counter-r3">
               <div>
                  <p className="counter-number">{seconds > 0 ? (clicks / seconds).toFixed(1): 0}</p>
               </div>
                  <p className="caller">Click/s</p>
               </div>
         </div>
         <button className="back" onClick={clickHandler}>Back</button>
      </>
      
   )
}

export default Results
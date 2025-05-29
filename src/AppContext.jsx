import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const [clicks, setClicks] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [started, setStarted] = useState(false);
   const [cps, setCps] = useState(0);
   const [showResults, setShowResults] = useState(false);



  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setSeconds(prev => {
        const updated = +(prev + 0.01).toFixed(3);

        if (prev >= 5) {
          clearInterval(interval);
          setStarted(false);
          setShowResults(true);
          return 5;
        }
        return updated;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [started]);





  function Counter() {
    if (seconds >= 5) return;

    setClicks (prev => prev + 1);

    setStarted (prev => {
      if (!prev) {
        setSeconds(0)
        return true;
      } 
      return prev;
    })
  };

  return (
   <AppContext.Provider value={{
      clicks,
      seconds,
      started,
      cps,
      showResults,
      setShowResults,
      Counter,
      setSeconds,
      setClicks
   }}>
      {children}
   </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
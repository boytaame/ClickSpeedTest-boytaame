import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Results from './results.jsx'
import { AppProvider } from './AppContext.jsx'
import { useAppContext } from './AppContext.jsx'

function AppWithResults() {
  const { showResults, clicks, seconds } = useAppContext();
  return showResults ? <Results timer={seconds} clicks={clicks} /> : <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <AppWithResults />
    </AppProvider>
  </StrictMode>,
)
